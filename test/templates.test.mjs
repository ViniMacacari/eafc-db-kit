import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { XMLParser } from 'fast-xml-parser';
import { EaFileError, SUPPORTED_VERSIONS, TEMPLATE_DATABASES, loadTemplateMetadata, parseEaFile,
  readEaFile, readTemplateDatabase } from '../dist/index.js';

const code = error => error instanceof EaFileError && error.code === 'INVALID_OPTIONS';
const fixtures = [
  { version: 'FC 25', database: 'main', bytes: 30322180, tables: 242, records: 276444 },
  { version: 'FC 26', database: 'main', bytes: 38563852, tables: 279, records: 337434 },
  { version: 'FC 25', database: 'fut', bytes: 30172220, tables: 210, records: 250814 },
  { version: 'FC 26', database: 'fut', bytes: 38118380, tables: 244, records: 308211 },
  { version: 'FC 25', database: 'localization', bytes: 6874244, tables: 2, records: 95376 },
  { version: 'FC 26', database: 'localization', bytes: 7273216, tables: 2, records: 100057 },
];

async function assertFc25Schema(database, decoded) {
  const sources = { main: 'fifa_ng_db-meta.xml', fut: 'FUT/cards_ng_db-meta.xml', localization: 'loc/eng_us-meta.xml' };
  const xml = await readFile(new URL(`../templates/FC 25/${sources[database]}`, import.meta.url), 'utf8');
  const parsed = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' }).parse(xml);
  const tables = new Map(parsed.database.table.map(table => [table.name, table]));
  assert.equal(decoded.tables.length, tables.size);
  for (const table of decoded.tables) {
    const definition = tables.get(table.name);
    assert.ok(definition, `Unknown FC 25 table: ${table.name}`);
    assert.equal(table.shortName, definition.shortname);
    const xmlFields = Array.isArray(definition.fields.field) ? definition.fields.field : [definition.fields.field];
    const fields = new Map(xmlFields.map(field => [field.name, field]));
    assert.equal(table.fields.length, fields.size);
    const row = table.records[0];
    if (row) assert.deepEqual(Object.keys(row).sort(), [...fields.keys()].sort());
    for (const field of table.fields) {
      const definition = fields.get(field.name);
      assert.ok(definition, `Unknown FC 25 field: ${table.name}.${field.name}`);
      assert.equal(field.shortName, definition.shortname);
      const kind = definition.type.replace(/^DBO/, '');
      if (kind === 'FIELDTYPE_STRING') {
        assert.ok(['string', 'short-compressed-string', 'long-compressed-string'].includes(field.type));
        if (row) assert.equal(typeof row[field.name], 'string');
      } else if (kind === 'FIELDTYPE_REAL') {
        assert.equal(field.type, 'float');
        if (row) assert.ok(row[field.name] === null || typeof row[field.name] === 'number');
      } else {
        assert.ok(['FIELDTYPE_INTEGER', 'FIELDTYPE_DATE'].includes(kind));
        assert.equal(field.type, 'integer');
        if (row) assert.equal(typeof row[field.name], 'number');
      }
    }
  }
}

for (const fixture of fixtures) {
  test(`integration: local template ${fixture.version}, ${fixture.database}`, async () => {
    const file = await readTemplateDatabase({ version: fixture.version, database: fixture.database });
    const db = file.databases[0];
    assert.equal(file.source.byteLength, fixture.bytes);
    assert.equal(db.tables.length, fixture.tables);
    assert.equal(db.tables.reduce((count, table) => count + table.records.length, 0), fixture.records);
    assert.equal(file.metadataComplete, true);
    assert.deepEqual(file.warnings, []);
    if (fixture.version === 'FC 25') await assertFc25Schema(fixture.database, db);
    if (fixture.database === 'main') {
      const teams = db.tables.find(table => table.name === 'teams');
      assert.equal(teams.records[0].teamname, 'Arsenal');
      assert.equal(teams.records[0].teamid, 1);
    }
  });
}

test('catalog exposes only bundled versions and databases', () => {
  assert.deepEqual(SUPPORTED_VERSIONS, ['FC 25', 'FC 26']);
  assert.deepEqual(TEMPLATE_DATABASES, ['main', 'fut', 'localization']);
  assert.ok(Object.isFrozen(SUPPORTED_VERSIONS));
});

test('version selects local metadata for file and byte reads', async () => {
  const url = new URL('../templates/FC 26/fifa_ng_db.db', import.meta.url);
  const { fileURLToPath } = await import('node:url');
  const file = await readEaFile(fileURLToPath(url), { version: 'FC 26', tables: ['teams'] });
  assert.equal(file.databases[0].tables[0].records.length, 799);
  assert.equal(file.metadataComplete, true);
  const metadata = await loadTemplateMetadata('FC 26');
  const parsed = parseEaFile(await readFile(url), { metadata, tables: ['teams'] });
  assert.deepEqual(parsed.databases, file.databases);
});

test('rejects invalid versions, catalog traversal, and databases without versions', async () => {
  for (const version of ['FC 24', '../FC 26', undefined]) {
    await assert.rejects(readTemplateDatabase({ version }), code);
  }
  await assert.rejects(readEaFile('missing', { version: 'FC 26', database: 'invalid' }), code);
  await assert.rejects(readEaFile('missing', { database: 'fut' }), code);
  await assert.rejects(loadTemplateMetadata('FC 24'), code);
});
