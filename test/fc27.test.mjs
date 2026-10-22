import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { loadTemplateMetadata, parseEaFile, readEaFile, serializeEaFile } from '../dist/index.js';
import { assertCrcs } from './binary-assertions.mjs';

const squad = new URL('../dev/Squads fc27/Squads20261010103923955', import.meta.url);

test('integration: reads and edits the optional local FC 27 squad without changing its source', {
  skip: !existsSync(squad),
}, async () => {
  const bytes = await readFile(squad);
  const data = await readEaFile(fileURLToPath(squad), { version: 'FC 27' });
  assert.equal(data.source.kind, 'squad');
  assert.equal(data.inGameName, 'The Green Kits');
  assert.equal(data.databases.length, 1);
  assert.equal(data.databases[0].offset, 1178);
  assert.equal(data.databases[0].tables.length, 82);
  assert.equal(data.databases[0].tables.reduce((count, table) => count + table.records.length, 0), 86479);
  assert.equal(data.metadataComplete, true);
  assert.deepEqual(data.warnings, []);
  assertCrcs(bytes, data.databases[0]);
  assert.deepEqual(Buffer.from(serializeEaFile(bytes, data)), bytes);
  const players = data.databases[0].tables.find(table => table.name === 'players');
  const player = players.records[0];
  player.role9 = player.role9 === 1 ? 2 : 1;
  player.wage = 12345;
  player.releaseclause = 123456;
  const output = serializeEaFile(bytes, data);
  const metadata = await loadTemplateMetadata('FC 27');
  const decoded = parseEaFile(output, { metadata });
  assert.equal(decoded.metadataComplete, true);
  assert.deepEqual(decoded.warnings, []);
  assert.equal(decoded.databases[0].offset, data.databases[0].offset);
  assert.equal(decoded.databases[0].byteLength, data.databases[0].byteLength);
  assert.equal(decoded.databases[0].tableCount, data.databases[0].tableCount);
  for (const [index, table] of decoded.databases[0].tables.entries()) {
    const expected = data.databases[0].tables[index];
    assert.equal(table.name, expected.name);
    assert.equal(table.shortName, expected.shortName);
    assert.deepEqual(table.fields, expected.fields);
    assert.deepEqual(table.records, expected.records);
  }
  assertCrcs(output, decoded.databases[0]);
  assert.equal(output.length, bytes.length);
  assert.deepEqual(await readFile(squad), bytes);
});

test('integration: transfers a player in the optional local FC 27 squad and rereads the result', {
  skip: !existsSync(squad),
}, async () => {
  const bytes = await readFile(squad);
  const file = await readEaFile(fileURLToPath(squad), { version: 'FC 27' });
  const links = file.databases[0].tables.find(table => table.name === 'teamplayerlinks');
  const retained = structuredClone(links.records.filter(row => row.playerid === 231747 && row.teamid !== 243));
  const result = file.transferPlayer(231747, 1, { fromTeamId: 243 });
  assert.equal(result.profile, 'FC 27');
  assert.equal(result.changed, true);
  const output = serializeEaFile(bytes, file);
  const metadata = await loadTemplateMetadata('FC 27');
  const decoded = parseEaFile(output, { metadata, kind: 'squad' });
  for (const actual of decoded.databases[0].tables) {
    const expected = file.databases[0].tables.find(table => table.name === actual.name);
    assert.deepEqual(actual.records, expected.records);
  }
  const writtenLinks = decoded.databases[0].tables.find(table => table.name === 'teamplayerlinks');
  assert.deepEqual(writtenLinks.records.filter(row => row.playerid === 231747 && row.teamid !== 1), retained);
  assert.equal(writtenLinks.records.find(row => row.playerid === 231747 && row.teamid === 1).jerseynumber, result.jerseyNumber);
  assert.equal(output.length, bytes.length);
  assert.equal(decoded.databases[0].offset, file.databases[0].offset);
  assertCrcs(output, decoded.databases[0]);
  assert.deepEqual(await readFile(squad), bytes);
});
