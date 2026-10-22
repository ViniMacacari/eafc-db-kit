import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { basename, dirname, join } from 'node:path';
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
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { SUPPORTED_VERSIONS, TEMPLATE_DATABASES, loadTemplateMetadata, readTemplateDatabase,
  readEaFile, writeEaFile, parseCareerData, FifaDatabaseService, EaFcFileService, eaFcFileService,
  readFifaDatabase, parseFifaDatabase, writeFifaDatabase, serializeFifaDatabase,
  PlayerTransferService, PlayerCreationService, ClubCreationService, PLAYER_POSITIONS, withFileOperations } from 'eafc-db-kit';

for (const fn of [readEaFile, writeEaFile, parseCareerData, readTemplateDatabase,
  readFifaDatabase, parseFifaDatabase, writeFifaDatabase, serializeFifaDatabase]) assert.equal(typeof fn, 'function');
assert.ok(eaFcFileService instanceof EaFcFileService);
assert.equal(typeof withFileOperations, 'function');
assert.equal(typeof new PlayerTransferService().transfer, 'function');
assert.equal(typeof new PlayerCreationService().create, 'function');
assert.equal(typeof new ClubCreationService().create, 'function');
assert.equal(PLAYER_POSITIONS.GK, 0);
for (const version of SUPPORTED_VERSIONS) {
  for (const database of TEMPLATE_DATABASES) {
    const metadata = await loadTemplateMetadata(version, database);
    assert.ok(metadata.tables.length > 0);
    const data = await eaFcFileService.readTemplate({ version, database,
      tables: database === 'main' ? ['teams'] : ['__package_check_no_table__'] });
    assert.ok(data.databases.length > 0);
    assert.ok(data.metadataComplete);
    assert.deepEqual(data.warnings, []);
    assert.equal(typeof data.transferPlayer, 'function');
    assert.equal(typeof data.createPlayer, 'function');
    assert.equal(typeof data.createClub, 'function');
    assert.equal(Object.keys(data).includes('createClub'), false);
    assert.equal(Object.keys(data).includes('transferPlayer'), false);
    if (database === 'main') {
      const teams = data.databases.flatMap(db => db.tables).find(table => table.name === 'teams');
      assert.equal(teams.records[0].teamname, 'Arsenal');
    }
  }
}
const fifa = new FifaDatabaseService();
const dbPath = fileURLToPath(new URL('../templates/FC 25/fifa_ng_db.db', import.meta.resolve('eafc-db-kit')));
const xmlPath = fileURLToPath(new URL('../templates/FC 25/fifa_ng_db-meta.xml', import.meta.resolve('eafc-db-kit')));
const external = await fifa.read(dbPath, xmlPath);
assert.equal(external.format, 'fifa-db');
const transfer = external.transferPlayer(231747, 1, { fromTeamId: 243 });
assert.equal(transfer.profile, 'fifa-db');
assert.equal(transfer.changed, true);
const created = external.createPlayer({ firstName: 'Package', lastName: 'Player', teamId: 1, nationality: 54,
  position: 'GK' }, { randomize: { seed: 42 } });
assert.equal(created.created, true);
assert.equal(created.profile, 'fifa-db');
const club = external.createClub({ name: 'Package FC', leagueId: 13, colors: ['#123456', '#FFFFFF'] });
const clubPlayer = external.createPlayer({ firstName: 'Club', lastName: 'Player', teamId: club.teamId, nationality: 54, position: 'ST' });
assert.equal(club.created, true);
const team = external.databases[0].tables.find(table => table.name === 'teams').records[0];
team.teamname = 'FIFA package test';
const result = await fifa.write(dbPath, xmlPath, fileURLToPath(new URL('./fifa-output.db', import.meta.url)), external);
const written = await fifa.read(result.path, xmlPath, { tables: ['teams', 'teamplayerlinks', 'teamkits', 'leagueteamlinks'] });
assert.equal(written.databases[0].tables.find(table => table.name === 'teams').records[0].teamname, 'FIFA package test');
const membership = written.databases[0].tables.find(table => table.name === 'teamplayerlinks')
  .records.find(row => row.playerid === 231747 && row.teamid === 1);
assert.equal(membership.jerseynumber, transfer.jerseyNumber);
const createdMembership = written.databases[0].tables.find(table => table.name === 'teamplayerlinks')
  .records.find(row => row.playerid === created.playerId && row.teamid === 1);
assert.equal(createdMembership.jerseynumber, created.jerseyNumber);
assert.deepEqual(written.warnings, []);
assert.equal(written.databases[0].tables.find(t => t.name === 'teams').records.find(r => r.teamid === club.teamId).teamcolor1r, 18);
assert.equal(written.databases[0].tables.find(t => t.name === 'teamkits').records.filter(r => r.teamtechid === club.teamId).length, 4);
assert.equal(written.databases[0].tables.find(t => t.name === 'leagueteamlinks').records.find(r => r.teamid === club.teamId).leagueid, 13);
assert.equal(written.databases[0].tables.find(t => t.name === 'teamplayerlinks').records.find(r => r.playerid === clubPlayer.playerId).teamid, club.teamId);
const bytes = await readFile(result.path), xml = await readFile(xmlPath, 'utf8');
assert.deepEqual(Buffer.from(fifa.serialize(bytes, xml, fifa.parse(bytes, xml, { tables: ['teams'] }))), bytes);
console.log('Installed ESM imports and all bundled template pairs passed.');
console.log('Installed FIFA and EA FC services, external XML reads, and database writes passed.');
console.log('Installed file operations and player transfer write/read passed.');
console.log('Installed player creation and linked roster write/read passed.');
console.log('Installed club creation, kit/league links, and new club player write/read passed.');
`);
  process.stdout.write(execFileSync(process.execPath, ['smoke.mjs'], { cwd: consumer, encoding: 'utf8' }));

  await writeFile(join(consumer, 'consumer.mts'), `
import { readTemplateDatabase, loadTemplateMetadata, readCareerData, writeEaFile,
  type EaFile, type EaFcVersion, type ReadTemplateOptions, type CareerData,
  type WriteFileResult, type Fc25Record, type Fc25FieldName, type Fc25LocalizationRecords,
  type Fc26Record, type Fc26FieldName, type Fc26TableName, type Fc26FutRecords,
  type Fc26LocalizationRecords, type Fc27Record, type Fc27FieldName, type Fc27TableName,
  type Fc27File, type Fc27FutRecords, type Fc27LocalizationRecords,
  FifaDatabaseService, EaFcFileService, fifaDatabaseService, type FifaDatabaseFile,
  type FifaReadOptions, type FifaWriteOptions, type EaFileSnapshot, type FifaDatabaseSnapshot,
  type FileOperations, type TransferPlayerOptions, type TransferPlayerResult,
  PlayerTransferService, PlayerCreationService, PLAYER_POSITIONS, withFileOperations,
  type CreatePlayerInput, type CreatePlayerOptions, type CreatePlayerResult,
  ClubCreationService, type CreateClubInput, type CreateClubOptions, type CreateClubResult, type ClubColors } from 'eafc-db-kit';

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

export type Player26 = Fc26Record<'players'>;
export const playerField26: Fc26FieldName<'players'> = 'preferredposition7';
export const archetypesTable: Fc26TableName = 'archetypes';
export const fc26 = await readTemplateDatabase({ version: 'FC 26', tables: ['players', 'archetypes'] });
const players26 = fc26.databases.flatMap(db => db.tables).find(table => table.name === 'players');
export const preferredPosition: number | undefined = players26?.records[0]?.preferredposition7;
export const fc25RejectsFc26Fields: 'preferredposition7' extends Fc25FieldName<'players'> ? never : true = true;
export const fut26 = await readTemplateDatabase({ version: 'FC 26', database: 'fut', tables: ['players'] });
export const futPlayers26: readonly Fc26FutRecords['players'][] | undefined =
  fut26.databases[0]?.tables.find(table => table.name === 'players')?.records;
export const localization26 = await readTemplateDatabase({ version: 'FC 26', database: 'localization' });
export const strings26: readonly Fc26LocalizationRecords['LanguageStrings1'][] | undefined =
  localization26.databases[0]?.tables.find(table => table.name === 'LanguageStrings1')?.records;
const metadata26 = await loadTemplateMetadata('FC 26', 'localization');
export const localizationField26: 'hashid' | 'sourcetext' | 'stringid' | undefined =
  metadata26.tables.find(table => table.name === 'LanguageStrings1')?.fields[0]?.name;

export type Player27 = Fc27Record<'players'>;
export const playerField27: Fc27FieldName<'players'> = 'role9';
export const vipPlayersTable: Fc27TableName = 'vipplayers';
export const fc27 = await readTemplateDatabase({ version: 'FC 27', tables: ['players', 'vipplayers'] });
export const typed27: Fc27File = fc27;
const players27 = fc27.databases.flatMap(db => db.tables).find(table => table.name === 'players');
export const role27: number | undefined = players27?.records[0]?.role9;
export const wage27: number | undefined = players27?.records[0]?.wage;
export const fc26RejectsFc27Fields: 'role9' extends Fc26FieldName<'players'> ? never : true = true;
export const fc27RejectsRemovedCareerTable: 'career_managerinfo' extends Fc27TableName ? never : true = true;
export const fut27 = await readTemplateDatabase({ version: 'FC 27', database: 'fut', tables: ['players'] });
export const futPlayers27: readonly Fc27FutRecords['players'][] | undefined =
  fut27.databases[0]?.tables.find(table => table.name === 'players')?.records;
export const localization27 = await readTemplateDatabase({ version: 'FC 27', database: 'localization' });
export const strings27: readonly Fc27LocalizationRecords['LanguageStrings1'][] | undefined =
  localization27.databases[0]?.tables.find(table => table.name === 'LanguageStrings1')?.records;
const metadata27 = await loadTemplateMetadata('FC 27', 'localization');
export const localizationField27: 'hashid' | 'sourcetext' | 'stringid' | undefined =
  metadata27.tables.find(table => table.name === 'LanguageStrings1')?.fields[0]?.name;

export const fifa = new FifaDatabaseService();
export const external: FifaDatabaseFile = await fifa.read('input.db', 'input.xml');
export const snapshotKind: 'database' = external.source.kind;
export const snapshotFormat: 'fifa-db' = external.format;
export const readOptions = { tables: ['players'] } satisfies FifaReadOptions;
export const writeOptions = { overwrite: false } satisfies FifaWriteOptions;
export const output: WriteFileResult = await fifaDatabaseService.write('input.db', 'input.xml', 'output.db', external);
export const requiresXml: Parameters<FifaDatabaseService['read']>[1] = 'input.xml';
export const rejectsVersionOption: 'version' extends keyof FifaReadOptions ? never : true = true;
export const serviceFc27: Fc27File = await new EaFcFileService().read('Squads', { version: 'FC 27' });
export const transferOptions = { fromTeamId: 243, jerseyNumber: 9 } satisfies TransferPlayerOptions;
export const operations: FileOperations = serviceFc27;
export const transferred: TransferPlayerResult = operations.transferPlayer(231747, 1, transferOptions);
export const snapshot: EaFileSnapshot = serviceFc27;
export const fifaSnapshot: FifaDatabaseSnapshot = external;
export const hydrated = withFileOperations(snapshot, 'FC 27');
export const serviceTransfer: TransferPlayerResult = new PlayerTransferService('FC 27').transfer(snapshot, 231747, 1);
export const writeSnapshot: (source: string, output: string, data: EaFileSnapshot) => Promise<WriteFileResult> = writeEaFile;
export const playerInput = { firstName: 'New', lastName: 'Player', teamId: 1, nationality: 54,
  position: 'GK' } satisfies CreatePlayerInput;
export const creationOptions = { autoGenerateId: true, randomize: { seed: 42, fields: ['gkreflexes'] } } satisfies CreatePlayerOptions;
export const created: CreatePlayerResult = serviceFc27.createPlayer(playerInput, creationOptions);
export const clubColors: ClubColors = ['#123456', { r: 255, g: 255, b: 255 }];
export const clubInput = { name: 'New FC', leagueId: 13, colors: clubColors } satisfies CreateClubInput;
export const clubOptions = { autoGenerateId: true, dryRun: true } satisfies CreateClubOptions;
export const club: CreateClubResult = operations.createClub(clubInput, clubOptions);
export const clubService: CreateClubResult = new ClubCreationService('FC 27').create(snapshot, clubInput, clubOptions);
export const creationService: CreatePlayerResult = new PlayerCreationService('FC 27').create(snapshot, playerInput);
export const goalkeeperId: 0 = PLAYER_POSITIONS.GK;
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
  assert.equal(dirname(consumer).toLowerCase(), tmpdir().toLowerCase());
  assert.ok(basename(consumer).startsWith('eafc-db-kit-consumer-'));
  await rm(consumer, { recursive: true, force: true, maxRetries: 3 });
}

console.log(`Package verified: ${manifest.name}@${manifest.version}`);
console.log(`Tarball: ${tarball}`);
console.log(`Size: ${(packed.size / 1024 / 1024).toFixed(1)} MiB packed; ${(packed.unpackedSize / 1024 / 1024).toFixed(1)} MiB unpacked.`);
