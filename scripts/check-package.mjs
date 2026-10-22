import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
const npmCli = process.env.npm_execpath;
assert.ok(npmCli, 'Run this check with npm run check:package.');

function npm(args, cwd) {
  return execFileSync(process.execPath, [npmCli, ...args], {
    cwd,
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
  });
}

async function filesIn(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${prefix}${entry.name}`;
    if (entry.isDirectory()) files.push(...await filesIn(join(directory, entry.name), `${path}/`));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

const artifacts = join(root, 'output', 'npm');
await mkdir(artifacts, { recursive: true });
const [packed] = JSON.parse(npm(['pack', '--dry-run=false', '--json', '--pack-destination', artifacts], root));
assert.equal(packed.name, manifest.name);
assert.equal(packed.version, manifest.version);
const inventory = new Set(packed.files.map(file => file.path));

for (const required of ['package.json', 'README.md', 'LICENSE', 'dist/index.js', 'dist/index.d.ts']) {
  assert.ok(inventory.has(required), `Missing package file: ${required}`);
}
for (const path of inventory) {
  assert.match(path, /^(?:package\.json|README\.md|LICENSE|(?:dist|templates|examples|docs)\/.+)$/,
    `Unexpected package file: ${path}`);
}
const sourceFiles = (await filesIn(join(root, 'src'))).filter(path => path.endsWith('.ts'));
const expectedDist = sourceFiles.flatMap(path => [
  `dist/${path.slice(0, -3)}.js`,
  `dist/${path.slice(0, -3)}.d.ts`,
]);
assert.deepEqual([...inventory].filter(path => path.startsWith('dist/')).sort(), expectedDist.sort(),
  'Compiled package files must match the current TypeScript sources.');
for (const directory of ['templates', 'examples', 'docs']) {
  for (const path of await filesIn(join(root, directory))) {
    assert.ok(inventory.has(`${directory}/${path}`), `Missing package file: ${directory}/${path}`);
  }
}

const tarball = join(artifacts, packed.filename);
const consumer = await mkdtemp(join(tmpdir(), 'eafc-db-kit-consumer-'));
try {
  await writeFile(join(consumer, 'package.json'), JSON.stringify({ private: true, type: 'module' }));
  npm(['install', '--dry-run=false', '--omit=dev', '--no-audit', '--no-fund', '--package-lock=false', tarball], consumer);
  await assert.rejects(access(join(consumer, 'node_modules', 'typescript')), { code: 'ENOENT' });

  const installed = JSON.parse(await readFile(join(consumer, 'node_modules', manifest.name, 'package.json'), 'utf8'));
  assert.equal(installed.name, manifest.name);
  assert.equal(installed.version, manifest.version);
  assert.equal(installed.license, 'MIT');
  assert.notEqual(installed.private, true);

  await writeFile(join(consumer, 'smoke.mjs'), `
import assert from 'node:assert/strict';
import { SUPPORTED_VERSIONS, TEMPLATE_DATABASES, loadTemplateMetadata, readTemplateDatabase,
  readEaFile, writeEaFile, parseCareerData } from 'eafc-db-kit';

for (const fn of [readEaFile, writeEaFile, parseCareerData]) assert.equal(typeof fn, 'function');
for (const version of SUPPORTED_VERSIONS) {
  for (const database of TEMPLATE_DATABASES) {
    const metadata = await loadTemplateMetadata(version, database);
    assert.ok(metadata.tables.length > 0);
    const data = await readTemplateDatabase({ version, database,
      tables: database === 'main' ? ['teams'] : ['__package_check_no_table__'] });
    assert.ok(data.databases.length > 0);
    assert.ok(data.metadataComplete);
    assert.deepEqual(data.warnings, []);
    if (database === 'main') {
      const teams = data.databases.flatMap(db => db.tables).find(table => table.name === 'teams');
      assert.equal(teams.records[0].teamname, 'Arsenal');
    }
  }
}
console.log('Installed ESM imports and all six bundled template pairs passed.');
`);
  process.stdout.write(execFileSync(process.execPath, ['smoke.mjs'], { cwd: consumer, encoding: 'utf8' }));

  await writeFile(join(consumer, 'consumer.mts'), `
import { readTemplateDatabase, loadTemplateMetadata, readCareerData, writeEaFile,
  type EaFile, type EaFcVersion, type ReadTemplateOptions, type CareerData,
  type WriteFileResult, type Fc25Record, type Fc25FieldName, type Fc25LocalizationRecords } from 'eafc-db-kit';

export const version: EaFcVersion = 'FC 26';
export const options = { version, tables: ['teams'] } satisfies ReadTemplateOptions;
export const data: EaFile = await readTemplateDatabase(options);
export const metadata = await loadTemplateMetadata(version);
export const readCareer: (path: string) => Promise<CareerData> = readCareerData;
export const write: (source: string, output: string, data: EaFile) => Promise<WriteFileResult> = writeEaFile;

export type Player = Fc25Record<'players'>;
export const playerField: Fc25FieldName<'players'> = 'overallrating';
export const fc25 = await readTemplateDatabase({ version: 'FC 25', tables: ['teams'] });
const teams = fc25.databases.flatMap(db => db.tables).find(table => table.name === 'teams');
export const teamName: string | undefined = teams?.records[0]?.teamname;
export const rejectsUnknownTeamField:
  'teamnane' extends keyof NonNullable<typeof teams>['records'][number] ? never : true = true;
export const localization = await readTemplateDatabase({ version: 'FC 25', database: 'localization' });
export const strings: readonly Fc25LocalizationRecords['LanguageStrings1'][] | undefined =
  localization.databases[0]?.tables.find(table => table.name === 'LanguageStrings1')?.records;
`);
  await writeFile(join(consumer, 'tsconfig.json'), JSON.stringify({
    compilerOptions: { target: 'ES2023', module: 'NodeNext', strict: true, noEmit: true, types: [], lib: ['ES2023'] },
    files: ['consumer.mts'],
  }));
  const compilerPackage = createRequire(import.meta.url).resolve('typescript/package.json');
  const compilerManifest = JSON.parse(await readFile(compilerPackage, 'utf8'));
  const compiler = join(dirname(compilerPackage), compilerManifest.bin.tsc);
  execFileSync(process.execPath, [compiler, '-p', join(consumer, 'tsconfig.json')], { cwd: consumer, stdio: 'inherit' });
  console.log('Installed TypeScript declarations passed without development dependencies.');
} finally {
  await rm(consumer, { recursive: true, force: true, maxRetries: 3 });
}

console.log(`Package verified: ${manifest.name}@${manifest.version}`);
console.log(`Tarball: ${tarball}`);
console.log(`Size: ${(packed.size / 1024 / 1024).toFixed(1)} MiB packed; ${(packed.unpackedSize / 1024 / 1024).toFixed(1)} MiB unpacked.`);
