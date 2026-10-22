import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { EaFcFileService, EaFileError, FifaDatabaseService, eaFcFileService, fifaDatabaseService,
  parseEaFile, parseFifaDatabase, readFifaDatabase, serializeFifaDatabase, writeFifaDatabase } from '../dist/index.js';
import { assertCrcs } from './binary-assertions.mjs';
import { expectedRow, fixtureMetadata, makeDatabase, makeSave } from './fixtures.mjs';

const code = expected => error => error instanceof EaFileError && error.code === expected;
const fieldXml = field => `<field shortname="${field.shortName}" name="${field.name}" rangelow="${field.rangeLow}"${field.rangeHigh === null ? '' : ` rangehigh="${field.rangeHigh}"`} />`;
const xml = `<database><table shortname="TEST" name="players"><fields>${fixtureMetadata.tables[0].fields.map(fieldXml).join('')}</fields></table></database>`;
const firstTable = data => data.databases[0].tables[0];

function twoTables() {
  const original = makeDatabase();
  const body = original.subarray(36);
  const prefix = Buffer.alloc(44);
  prefix.set(original.subarray(0, 24));
  prefix.writeInt32LE(prefix.length + body.length * 2, 8);
  prefix.writeInt32LE(2, 16);
  prefix.write('TEST', 24);
  prefix.write('OTHR', 32);
  prefix.writeUInt32LE(body.length, 36);
  return Buffer.concat([prefix, body, body]);
}

for (const big of [false, true]) {
  for (const rawStrings of [false, true]) {
    test(`FIFA: maps and edits standalone ${rawStrings ? 'raw' : 'Huffman'} databases (${big ? 'BE' : 'LE'})`, () => {
      const source = makeDatabase({ big, rawStrings });
      const original = Buffer.from(source);
      const data = fifaDatabaseService.parse(source, xml);
      assert.equal(data.format, 'fifa-db');
      assert.equal(data.container, 'database');
      assert.equal(data.source.kind, 'database');
      assert.equal(data.inGameName, null);
      assert.equal(data.metadataComplete, true);
      assert.equal(data.databases.length, 1);
      assert.equal(data.databases[0].endianness, big ? 'big' : 'little');
      assert.equal(firstTable(data).records[0].playerid, expectedRow.playerid);
      assert.equal(firstTable(data).records[0].birthdate, expectedRow.birthdate);
      assert.deepEqual(Buffer.from(fifaDatabaseService.serialize(source, xml, data)), source);
      Object.assign(firstTable(data).records[0], { playerid: 30, name: 'FIFA', nickname: 'Olá 🌍', signed: -123, rating: 2.75 });
      const output = fifaDatabaseService.serialize(source, xml, data);
      const decoded = fifaDatabaseService.parse(output, xml);
      assert.deepEqual(firstTable(decoded).records, firstTable(data).records);
      assert.deepEqual(decoded.warnings, []);
      assertCrcs(output, decoded.databases[0]);
      assert.deepEqual(source, original);
    });
  }
}

test('FIFA: adds, removes, and empties rows without modifying the XML', () => {
  const source = makeDatabase();
  const data = parseFifaDatabase(source, xml);
  for (const records of [[], [expectedRow], Array.from({ length: 6 }, (_, index) => ({ ...expectedRow, playerid: index }))]) {
    const changed = { ...data, databases: [{ ...data.databases[0], tables: [{ ...firstTable(data), records }] }] };
    const output = serializeFifaDatabase(source, xml, changed);
    const decoded = parseFifaDatabase(output, xml);
    assert.deepEqual(firstTable(decoded).records, records);
    assertCrcs(output, decoded.databases[0]);
  }
});

test('FIFA: filters by mapped names and binary codes and preserves standalone trailers', () => {
  const source = Buffer.concat([makeDatabase(), Buffer.from('opaque trailer')]);
  for (const name of ['players', 'TEST']) {
    const data = parseFifaDatabase(source, xml, { tables: [name] });
    assert.equal(firstTable(data).name, 'players');
    firstTable(data).records[0].name = 'New';
    const output = serializeFifaDatabase(source, xml, data);
    assert.equal(Buffer.from(output.subarray(-14)).toString(), 'opaque trailer');
    assert.equal(firstTable(parseFifaDatabase(output, xml)).records[0].name, 'New');
  }
  const empty = parseFifaDatabase(source, xml, { tables: ['missing'] });
  assert.equal(empty.databases[0].tableCount, 1);
  assert.deepEqual(empty.databases[0].tables, []);
  assert.deepEqual(Buffer.from(serializeFifaDatabase(source, xml, empty)), source);
});

test('FIFA: requires complete XML mappings even for filtered or empty reads', () => {
  const source = makeDatabase();
  const missingField = xml.replace(fieldXml(fixtureMetadata.tables[0].fields[0]), '');
  for (const tables of [undefined, ['missing']]) {
    assert.throws(() => parseFifaDatabase(source, missingField, { ...(tables ? { tables } : {}) }), code('INVALID_METADATA'));
    assert.throws(() => parseFifaDatabase(twoTables(), xml, { tables: ['TEST'] }), code('INVALID_METADATA'));
  }
  assert.throws(() => serializeFifaDatabase(source, missingField, parseFifaDatabase(source, xml)), code('INVALID_METADATA'));
});

test('FIFA: rejects missing, invalid, ambiguous, and oversized XML', () => {
  const source = makeDatabase();
  assert.throws(() => parseFifaDatabase(source), code('INVALID_OPTIONS'));
  for (const invalid of ['', '<database>', '<!DOCTYPE database><database />', xml.replace('TEST', 'NOPE')]) {
    assert.throws(() => parseFifaDatabase(source, invalid), code('INVALID_METADATA'));
  }
  const duplicate = xml.replace('</database>', '<table shortname="OTHR" name="players"><fields /></table></database>');
  assert.throws(() => parseFifaDatabase(source, duplicate), code('INVALID_METADATA'));
  assert.throws(() => parseFifaDatabase(source, xml, { limits: { maxFileBytes: 20 } }), code('LIMIT_EXCEEDED'));
});

test('FIFA: rejects save containers, unsupported signatures, and EA FC options', () => {
  assert.throws(() => parseFifaDatabase(makeSave(), xml), code('INVALID_FORMAT'));
  const wrongSignature = makeDatabase();
  wrongSignature[3] = 7;
  assert.throws(() => parseFifaDatabase(wrongSignature, xml), code('INVALID_FORMAT'));
  assert.throws(() => parseFifaDatabase('not bytes', xml), code('INVALID_OPTIONS'));
  for (const options of [null, [], { version: 'FC 27' }, { metadata: fixtureMetadata }, { tables: [] }, { fileName: 1 }]) {
    assert.throws(() => parseFifaDatabase(makeDatabase(), xml, options), code('INVALID_OPTIONS'));
  }
});

test('FIFA: rejects tampered names, ranges, descriptors, and generic EA file snapshots', () => {
  const source = makeDatabase();
  for (const change of [
    data => { firstTable(data).name = 'different'; },
    data => { firstTable(data).fields[0].name = 'different'; },
    data => { firstTable(data).fields[0].rangeLow = 5; },
    data => { firstTable(data).fields[0].rangeHigh = 20; },
    data => { firstTable(data).fields[0].depth++; },
    data => { firstTable(data).offset++; },
    data => { data.databases.push(data.databases[0]); },
    data => { data.source.byteLength++; },
  ]) {
    const data = parseFifaDatabase(source, xml);
    change(data);
    assert.throws(() => serializeFifaDatabase(source, xml, data), code('INVALID_WRITE'));
  }
  assert.throws(() => serializeFifaDatabase(source, xml, parseEaFile(source, { metadata: fixtureMetadata })), code('INVALID_WRITE'));
  assert.throws(() => serializeFifaDatabase(source, xml.replace('rangelow="-1"', 'rangelow="0"'), parseFifaDatabase(source, xml)), code('INVALID_WRITE'));
  assert.throws(() => serializeFifaDatabase(source, xml, parseFifaDatabase(source, xml), { saveIntegrity: 'preserve' }), code('INVALID_OPTIONS'));
});

test('FIFA: validates edited values and separate source, decode, and output budgets', () => {
  const source = makeDatabase();
  const data = parseFifaDatabase(source, xml);
  firstTable(data).records[0].playerid = '30';
  assert.throws(() => serializeFifaDatabase(source, xml, data), code('INVALID_WRITE'));
  firstTable(data).records[0].playerid = 1000;
  assert.throws(() => serializeFifaDatabase(source, xml, data), code('INVALID_WRITE'));
  assert.throws(() => parseFifaDatabase(source, xml, { limits: { maxTotalRecords: 2 } }), code('LIMIT_EXCEEDED'));
  const growing = parseFifaDatabase(source, xml);
  firstTable(growing).records[0].nickname = 'x'.repeat(2000);
  assert.throws(() => serializeFifaDatabase(source, xml, growing), code('INVALID_WRITE'));
  firstTable(growing).records = Array.from({ length: 100 }, () => ({ ...expectedRow }));
  assert.throws(() => serializeFifaDatabase(source, xml, growing, { limits: { maxFileBytes: 1500 } }), code('LIMIT_EXCEEDED'));
});

test('FIFA: reads and writes a .db and .xml pair with exclusive outputs and source preservation', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'fifa-database-'));
  try {
    const source = join(directory, 'input.db'), metadata = join(directory, 'input.xml'), output = join(directory, 'edited.db');
    const bytes = makeDatabase();
    await writeFile(source, bytes);
    await writeFile(metadata, xml);
    const data = await new FifaDatabaseService().read(source, metadata);
    assert.equal(data.source.fileName, 'input.db');
    firstTable(data).records[0].nickname = 'FIFA';
    const result = await writeFifaDatabase(source, metadata, output, data);
    assert.equal(result.path, output);
    assert.equal(firstTable(await readFifaDatabase(output, metadata)).records[0].nickname, 'FIFA');
    await assert.rejects(writeFifaDatabase(source, metadata, output, data), code('FILE_WRITE_FAILED'));
    await assert.rejects(writeFifaDatabase(source, metadata, source, data), code('FILE_WRITE_FAILED'));
    await assert.rejects(writeFifaDatabase(source, metadata, metadata, data, { overwrite: true }), code('INVALID_OPTIONS'));
    await assert.rejects(writeFifaDatabase(source, metadata, output, data, { overwrite: 'yes' }), code('INVALID_OPTIONS'));
    await assert.rejects(readFifaDatabase(source), code('INVALID_OPTIONS'));
    await assert.rejects(writeFifaDatabase(source, undefined, output, data), code('INVALID_OPTIONS'));
    await assert.rejects(readFifaDatabase(source, join(directory, 'missing.xml')), code('FILE_READ_FAILED'));
    assert.deepEqual(await readFile(source), bytes);
    assert.equal(await readFile(metadata, 'utf8'), xml);
    await fifaDatabaseService.write(source, metadata, source, data, { overwrite: true });
    assert.equal(firstTable(await fifaDatabaseService.read(source, metadata)).records[0].nickname, 'FIFA');
    assert.deepEqual((await readdir(directory)).sort(), ['edited.db', 'input.db', 'input.xml']);
    await writeFile(metadata, Buffer.from([0xff, 0xfe, 0xff]));
    await assert.rejects(readFifaDatabase(source, metadata), code('INVALID_METADATA'));
  } finally {
    assert.equal(dirname(directory).toLowerCase(), tmpdir().toLowerCase());
    assert.ok(basename(directory).startsWith('fifa-database-'));
    await rm(directory, { recursive: true, force: true });
  }
});

test('FIFA: executable example edits a mapped team from another working directory', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'fifa-database-'));
  try {
    const source = join(directory, 'input.db'), metadata = join(directory, 'input.xml'), output = join(directory, 'output.db');
    const descriptor = xml.replace('name="players"', 'name="teams"').replace('name="playerid"', 'name="teamid"').replace('name="name"', 'name="teamname"');
    const original = makeDatabase();
    await writeFile(source, original);
    await writeFile(metadata, descriptor);
    const example = fileURLToPath(new URL('../examples/edit-fifa-team.mjs', import.meta.url));
    const result = JSON.parse(execFileSync(process.execPath, [example, source, metadata, output, '16', 'Novo FC'], {
      cwd: directory, encoding: 'utf8',
    }));
    assert.equal(result.teamName, 'Novo FC');
    assert.equal(firstTable(await readFifaDatabase(output, metadata)).records[0].teamname, 'Novo FC');
    assert.deepEqual(await readFile(source), original);
    assert.equal(await readFile(metadata, 'utf8'), descriptor);
    assert.throws(() => execFileSync(process.execPath, [example, source, metadata, output, '16', 'Existing'], { stdio: 'pipe' }));
    assert.equal(firstTable(await readFifaDatabase(output, metadata)).records[0].teamname, 'Novo FC');
  } finally {
    assert.equal(dirname(directory).toLowerCase(), tmpdir().toLowerCase());
    assert.ok(basename(directory).startsWith('fifa-database-'));
    await rm(directory, { recursive: true, force: true });
  }
});

test('services: EA FC methods preserve existing inference, templates, and save support', async () => {
  assert.ok(eaFcFileService instanceof EaFcFileService);
  assert.ok(fifaDatabaseService instanceof FifaDatabaseService);
  const file = new EaFcFileService().parse(makeSave(), { metadata: fixtureMetadata });
  assert.equal(file.container, 'ea-save');
  assert.equal(firstTable(file).records[0].playerid, expectedRow.playerid);
  assert.equal(typeof eaFcFileService.parseCareer, 'function');
  assert.equal(typeof eaFcFileService.readCareer, 'function');
  for (const version of ['FC 25', 'FC 26', 'FC 27']) {
    const source = new URL(`../templates/${version}/fifa_ng_db.db`, import.meta.url);
    const metadata = new URL(`../templates/${version}/fifa_ng_db-meta.xml`, import.meta.url);
    const [fifa, ea] = await Promise.all([
      fifaDatabaseService.read(fileURLToPath(source), fileURLToPath(metadata), { tables: ['teams'] }),
      eaFcFileService.readTemplate({ version, tables: ['teams'] }),
    ]);
    assert.equal(fifa.metadataComplete, true);
    assert.deepEqual(fifa.databases, ea.databases);
    assert.equal(firstTable(fifa).records[0].teamname, 'Arsenal');
  }
});
