import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFile, mkdtemp, readFile, rm } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { FifaDatabaseService } from '../dist/index.js';

assert.equal(process.platform, 'win32', 'The optional C# reference check requires Windows PowerShell.');
const args = process.argv.slice(2);
assert.equal(args.length, 3, 'Usage: npm run check:fifa-reference -- <database.db> <metadata.xml> <FifaLibrary14.dll>');
const [databasePath, xmlPath, assemblyPath] = args.map(path => resolve(path));
const service = new FifaDatabaseService();
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const sourceHash = hash(await readFile(databasePath));
const xmlHash = hash(await readFile(xmlPath));
const directory = await mkdtemp(join(tmpdir(), 'fifa-reference-'));
const referenceInput = join(directory, 'input.db');
const referenceXml = join(directory, 'input.xml');

function reference(path, outputPath) {
  const params = ['-NoProfile', '-NonInteractive', '-File', fileURLToPath(new URL('./fifa-reference.ps1', import.meta.url)),
    '-DatabasePath', path, '-XmlPath', referenceXml, '-AssemblyPath', assemblyPath];
  if (outputPath) params.push('-OutputPath', outputPath);
  return JSON.parse(execFileSync('powershell.exe', params, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }));
}

function snapshot(file) {
  return { tables: file.databases[0].tables.map(table => ({
    name: table.name,
    records: table.records.length,
    samples: table.records.length ? [table.records[0], table.records.at(-1)] : [],
  })) };
}

function records(file) {
  return file.databases[0].tables.map(table => ({ name: table.name, records: table.records }));
}

try {
  await copyFile(databasePath, referenceInput);
  await copyFile(xmlPath, referenceXml);
  const original = await service.read(databasePath, xmlPath);
  const referenceOutput = join(directory, 'reference.db');
  const csharp = reference(referenceInput, referenceOutput);
  assert.deepEqual(snapshot(original), csharp, 'Original counts and first/last records must match C#.');
  const fromCsharp = await service.read(referenceOutput, xmlPath);
  assert.deepEqual(records(fromCsharp), records(original), 'Every record written by C# must match the original read.');
  const table = original.databases[0].tables.find(table => table.name === 'teams') ??
    original.databases[0].tables.find(table => table.name === 'LanguageStrings1');
  assert.ok(table, 'The reference fixture needs teams or LanguageStrings1.');
  const field = table.name === 'teams' ? 'teamname' : 'sourcetext';
  const row = table.records[0];
  assert.ok(row);
  const changed = 'FIFA test';
  row[field] = changed;
  const outputPath = join(directory, 'typescript.db');
  await service.write(databasePath, xmlPath, outputPath, original);
  const reread = await service.read(outputPath, xmlPath);
  assert.deepEqual(records(reread), records(original), 'Every TypeScript output record must match the edited data.');
  assert.deepEqual(reference(outputPath), snapshot(reread), 'TypeScript output must reopen correctly in C#.');
  assert.equal(hash(await readFile(databasePath)), sourceHash, 'The source database must remain untouched.');
  assert.equal(hash(await readFile(xmlPath)), xmlHash, 'The source XML must remain untouched.');
  console.log(JSON.stringify({ database: basename(databasePath), xml: basename(xmlPath), sha256: sourceHash,
    metadataSha256: xmlHash, assembly: basename(assemblyPath), tables: original.databases[0].tableCount,
    records: original.databases[0].tables.reduce((sum, table) => sum + table.records.length, 0),
    originalSamplesMatchCsharp: true, allCsharpOutputRecordsMatch: true, allTypescriptOutputRecordsMatch: true,
    typescriptOutputReopenedByCsharp: true, editedTable: table.name, editedField: field,
    sourceDatabasePreserved: true, sourceXmlPreserved: true }, null, 2));
} finally {
  assert.equal(dirname(directory).toLowerCase(), tmpdir().toLowerCase());
  assert.ok(basename(directory).startsWith('fifa-reference-'));
  await rm(directory, { recursive: true, force: true });
}
