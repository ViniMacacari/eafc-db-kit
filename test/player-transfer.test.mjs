import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { EaFileError, PlayerTransferService, eaFileJsonChunks, loadTemplateMetadata,
  parseEaFile, parseFifaDatabase, readTemplateDatabase, serializeEaFile, serializeFifaDatabase,
  withFileOperations } from '../dist/index.js';
import { assertCrcs } from './binary-assertions.mjs';
import { makeSave } from './fixtures.mjs';
import { transferFixture } from './transfer-fixtures.mjs';

const code = expected => error => error instanceof EaFileError && error.code === expected;
const table = (file, name, index = 0) => file.databases[index].tables.find(t => t.name === name);
const rows = (file, name) => table(file, name).records;
const fixture = () => {
  const source = transferFixture();
  return { ...source, file: parseEaFile(source.bytes, { metadata: source.metadata }) };
};
const unchanged = (file, action, errorCode = 'INVALID_TRANSFER') => {
  const before = JSON.stringify(file);
  assert.throws(action, code(errorCode));
  assert.equal(JSON.stringify(file), before);
};

for (const profile of ['FC 25', 'FC 26', 'FC 27', 'schema', 'fifa-db']) {
  test(`transfer: updates club links, lineups, roles, and loans (${profile})`, () => {
    const { file } = fixture();
    withFileOperations(file, profile);
    const national = structuredClone(rows(file, 'teamplayerlinks').find(row => row.teamid === 3));
    const nationalSheet = structuredClone(rows(file, 'default_teamsheets').find(row => row.teamid === 3));
    const player = structuredClone(rows(file, 'players')[1]);
    const result = file.transferPlayer(2, 2);
    assert.equal(result.profile, profile);
    assert.equal(result.fromTeamId, 1);
    assert.equal(result.toTeamId, 2);
    assert.equal(result.jerseyNumber, 13);
    assert.equal(result.changed, true);
    for (const name of ['teamplayerlinks', 'temp_teamplayerlinks', 'teamplayerlinks_vh']) {
      const link = rows(file, name).find(row => row.playerid === 2 && row.teamid === 2);
      assert.deepEqual(link, { playerid: 2, teamid: 2, jerseynumber: 13, position: 29,
        artificialkey: 21, leaguegoals: 0, yellows: 0, injury: 3, form: 80 });
    }
    assert.deepEqual(rows(file, 'teamplayerlinks').find(row => row.teamid === 3), national);
    assert.deepEqual(rows(file, 'default_teamsheets').find(row => row.teamid === 3), nationalSheet);
    assert.deepEqual(rows(file, 'players')[1], player);
    assert.deepEqual(rows(file, 'playerloans').map(row => row.playerid), [3]);
    assert.equal(rows(file, 'teamplayerlinks').find(row => row.playerid === 12).position, 24);
    for (const name of ['default_mentalities', 'mentalities', 'cm_mentalities', 'cm_default_mentalities']) {
      assert.equal(rows(file, name)[0].playerid1, 12);
      assert.equal(rows(file, name)[1].playerid1, 102);
      assert.equal(rows(file, name)[2].playerid1, 2);
    }
    for (const name of ['default_teamsheets', 'teamsheets']) {
      const source = rows(file, name).find(row => row.teamid === 1);
      const destination = rows(file, name).find(row => row.teamid === 2);
      assert.equal(source.playerid1, 12);
      assert.equal(source.playerid11, -1);
      assert.equal(source.captainid, 12);
      assert.equal(source.penaltytakerid, 12);
      assert.equal(source.customsub0in, -1);
      assert.equal(source.customsub0out, -1);
      assert.equal(destination.playerid12, 2);
      assert.equal(destination.captainid, 102);
      assert.equal(source.cksupport4, profile === 'FC 25' ? 2 : 12);
    }
    assert.equal(rows(file, 'teams')[0].captainid, 3);
    assert.equal(result.tables.find(t => t.name === 'playerloans').removedRecords, 1);
  });
}

for (const big of [false, true]) {
  for (const kind of ['database', 'squad', 'fifa-db']) {
    test(`transfer: binary round trip with CRCs (${kind}, ${big ? 'BE' : 'LE'})`, () => {
      const { bytes, metadata, xml } = transferFixture({ big });
      const source = kind === 'squad' ? makeSave([bytes]) : bytes;
      const original = Buffer.from(source);
      const file = kind === 'fifa-db' ? parseFifaDatabase(source, xml) : parseEaFile(source, { metadata, kind });
      file.transferPlayer(2, 2, { jerseyNumber: 20 });
      const output = kind === 'fifa-db' ? serializeFifaDatabase(source, xml, file) : serializeEaFile(source, file);
      const decoded = kind === 'fifa-db' ? parseFifaDatabase(output, xml) : parseEaFile(output, { metadata, kind });
      for (const expected of file.databases[0].tables) assert.deepEqual(table(decoded, expected.name).records, expected.records);
      assertCrcs(output, decoded.databases[0]);
      assert.deepEqual(source, original);
      if (kind === 'squad') {
        assert.equal(output.length, source.length);
        assert.equal(decoded.databases[0].offset, file.databases[0].offset);
      }
    });
  }
}

test('transfer: preserves a free shirt number and accepts a same-club no-op', () => {
  const { file } = fixture();
  rows(file, 'teamplayerlinks').filter(row => row.teamid === 2).forEach(row => { row.jerseynumber += 20; });
  assert.equal(file.transferPlayer(2, 2).jerseyNumber, 2);
  const before = JSON.stringify(file);
  assert.equal(file.transferPlayer(2, 2).changed, false);
  assert.equal(JSON.stringify(file), before);
  unchanged(file, () => file.transferPlayer(2, 2, { jerseyNumber: 30 }));
});

test('transfer: source selection preserves additional club and national memberships', () => {
  const { file } = fixture();
  rows(file, 'teamplayerlinks').push({ ...rows(file, 'teamplayerlinks')[1], teamid: 4 });
  rows(file, 'teams').push({ teamid: 4, gender: 0, captainid: -1, cksupport4: -1 });
  rows(file, 'leagueteamlinks').push({ leagueid: 1, teamid: 4 });
  unchanged(file, () => file.transferPlayer(2, 2));
  file.transferPlayer(2, 2, { fromTeamId: 1 });
  assert.deepEqual(rows(file, 'teamplayerlinks').filter(row => row.playerid === 2).map(row => row.teamid), [2, 3, 4]);
});

test('transfer: promotes a goalkeeper when the departing player occupies the goalkeeper slot', () => {
  const { file } = fixture();
  rows(file, 'players').find(row => row.playerid === 12).preferredposition1 = 0;
  file.transferPlayer(1, 2);
  for (const name of ['default_teamsheets', 'teamsheets']) {
    assert.equal(rows(file, name)[0].playerid0, 12);
    assert.equal(rows(file, name)[0].playerid11, -1);
    assert.equal(rows(file, name)[0].playerid1, 2);
  }
  assert.equal(rows(file, 'teamplayerlinks').find(row => row.playerid === 12).position, 0);
});

test('transfer: replaces a departing starter in databases without team sheets', () => {
  const { file } = fixture();
  file.databases[0].tables = file.databases[0].tables.filter(table => !/teamsheets|mentalities/.test(table.name));
  file.databases[0].tableCount = file.databases[0].tables.length;
  file.transferPlayer(2, 2);
  assert.equal(rows(file, 'teamplayerlinks').find(row => row.playerid === 12).position, 24);
  assert.equal(rows(file, 'teamplayerlinks').find(row => row.playerid === 2 && row.teamid === 2).position, 29);
});

test('transfer: matches alternative tactical sheets and avoids duplicate starting players', () => {
  const { file } = fixture();
  const alternate = { ...rows(file, 'teamsheets')[0], teamsheetid: 9, profileid: 4, playerid10: 12, playerid11: 11 };
  rows(file, 'teamsheets').push(alternate);
  Object.assign(rows(file, 'mentalities')[0], { teamsheetid: 9, profileid: 4, playerid10: 12 });
  rows(file, 'default_mentalities')[0].playerid10 = 12;
  file.transferPlayer(2, 2);
  assert.equal(rows(file, 'default_teamsheets')[0].playerid1, 12);
  assert.equal(rows(file, 'default_mentalities')[0].playerid1, 11);
  assert.equal(alternate.playerid1, 11);
  assert.equal(rows(file, 'mentalities')[0].playerid1, 11);
  const tacticalIds = Object.entries(rows(file, 'mentalities')[0]).filter(([name]) => /^playerid\d+$/.test(name)).map(([, id]) => id);
  assert.equal(new Set(tacticalIds).size, 11);
});

test('transfer: selects a database explicitly and leaves other databases untouched', () => {
  const { bytes, metadata } = transferFixture();
  const file = parseEaFile(makeSave([bytes, bytes]), { metadata, kind: 'squad' });
  unchanged(file, () => file.transferPlayer(2, 2));
  const before = structuredClone(file.databases[0]);
  const result = file.transferPlayer(2, 2, { databaseIndex: 1 });
  assert.equal(result.databaseIndex, 1);
  assert.deepEqual(file.databases[0], before);
  assert.equal(table(file, 'teamplayerlinks', 1).records[1].teamid, 2);
});

test('transfer: keeps JSON and snapshot writers compatible and reattaches operations', () => {
  const { file, bytes } = fixture();
  assert.equal(Object.hasOwn(file, 'transferPlayer'), true);
  assert.equal(Object.keys(file).includes('transferPlayer'), false);
  const json = JSON.stringify(file);
  assert.deepEqual(JSON.parse([...eaFileJsonChunks(file)].join('')), JSON.parse(json));
  const snapshot = JSON.parse(json);
  assert.equal(snapshot.transferPlayer, undefined);
  assert.equal(structuredClone(file).transferPlayer, undefined);
  assert.deepEqual(Buffer.from(serializeEaFile(bytes, snapshot)), bytes);
  const hydrated = withFileOperations(snapshot, 'FC 26');
  const transfer = hydrated.transferPlayer;
  assert.equal(transfer(2, 2).profile, 'FC 26');
  assert.equal(new PlayerTransferService('FC 25').transfer(JSON.parse(json), 2, 2).profile, 'FC 25');
});

test('transfer: validates IDs and options before making changes', () => {
  const { file } = fixture();
  for (const args of [[0, 2], [2, -1], [2.5, 2], [2, NaN], [2, 2, null], [2, 2, []],
    [2, 2, { wage: 5000 }], [2, 2, { jerseyNumber: 100 }], [2, 2, { fromTeamId: 0 }], [2, 2, { databaseIndex: -1 }]]) {
    unchanged(file, () => file.transferPlayer(...args), 'INVALID_OPTIONS');
  }
});

test('transfer: rejects missing players, clubs, mappings, and conflicting memberships atomically', () => {
  for (const change of [
    file => { rows(file, 'players').splice(1, 1); },
    file => { rows(file, 'players').push({ ...rows(file, 'players')[1] }); },
    file => { rows(file, 'teams').splice(1, 1); },
    file => { rows(file, 'leagueteamlinks').splice(0, 1); },
    file => { rows(file, 'teams')[1].gender = 1; },
    file => { rows(file, 'teamplayerlinks').push({ ...rows(file, 'teamplayerlinks')[1], teamid: 2 }); },
  ]) {
    const { file } = fixture();
    change(file);
    unchanged(file, () => file.transferPlayer(2, 2));
  }
  const { file } = fixture();
  unchanged(file, () => file.transferPlayer(2, 3));
  unchanged(file, () => file.transferPlayer(2, 2, { fromTeamId: 999 }));
  unchanged(file, () => file.transferPlayer(2, 2, { databaseIndex: 99 }));
  unchanged(file, () => file.transferPlayer(2, 2, { jerseyNumber: 2 }));
});

test('transfer: rejects careers, unknown containers, filtered reads, and active career state', () => {
  const { bytes, metadata } = transferFixture();
  for (const kind of ['career', 'unknown']) {
    const file = parseEaFile(makeSave([bytes]), { metadata, kind });
    unchanged(file, () => file.transferPlayer(2, 2), 'UNSUPPORTED_OPERATION');
  }
  const filtered = parseEaFile(bytes, { metadata, tables: ['players', 'teams', 'teamplayerlinks'] });
  unchanged(filtered, () => filtered.transferPlayer(2, 2), 'UNSUPPORTED_OPERATION');
  for (const name of ['career_playercontract', 'career_presignedcontract']) {
    const { file } = fixture();
    rows(file, name).push({ playerid: 2, teamid: 1, wage: 5000, offeredwage: 5000 });
    unchanged(file, () => file.transferPlayer(2, 2), 'UNSUPPORTED_OPERATION');
  }
  const unmapped = parseEaFile(bytes);
  unchanged(unmapped, () => unmapped.transferPlayer(2, 2, { databaseIndex: 0 }), 'UNSUPPORTED_OPERATION');
  const { file } = fixture();
  table(file, 'playerloans').metadataComplete = false;
  unchanged(file, () => file.transferPlayer(2, 2), 'UNSUPPORTED_OPERATION');
});

test('transfer: detects full squads, missing replacements, and frozen records before applying any edit', () => {
  for (const change of [
    file => { rows(file, 'default_teamsheets')[1].playerid12 = 900; rows(file, 'default_teamsheets')[1].playerid13 = 901; },
    file => { rows(file, 'default_teamsheets')[0].playerid11 = -1; rows(file, 'teamplayerlinks').splice(11, 1); },
    file => { Object.freeze(rows(file, 'default_teamsheets')[0]); },
    file => { Object.freeze(table(file, 'playerloans')); },
    file => { Object.freeze(rows(file, 'default_mentalities')[0]); },
    file => { table(file, 'teams').fields.find(field => field.name === 'captainid').rangeHigh = 1; },
    file => { table(file, 'teamplayerlinks').fields.find(field => field.name === 'position').depth = 4; },
  ]) {
    const { file } = fixture();
    change(file);
    unchanged(file, () => file.transferPlayer(2, 2));
  }
});

for (const version of ['FC 25', 'FC 26', 'FC 27']) {
  test(`integration: transfers and rereads a player in the bundled ${version} database`, async () => {
    const url = new URL(`../templates/${version}/fifa_ng_db.db`, import.meta.url);
    const bytes = await readFile(url);
    const file = await readTemplateDatabase({ version });
    const memberships = rows(file, 'teamplayerlinks').filter(row => row.playerid === 231747);
    const retained = structuredClone(memberships.filter(row => row.teamid !== 243));
    const player = structuredClone(rows(file, 'players').find(row => row.playerid === 231747));
    const result = file.transferPlayer(231747, 1, { fromTeamId: 243 });
    assert.equal(result.profile, version);
    assert.equal(result.changed, true);
    const output = serializeEaFile(bytes, file);
    const metadata = await loadTemplateMetadata(version);
    const decoded = parseEaFile(output, { metadata, tables: result.tables.map(change => change.name).concat('players') });
    for (const actual of decoded.databases[0].tables) assert.deepEqual(actual.records, table(file, actual.name).records);
    assert.deepEqual(rows(decoded, 'players').find(row => row.playerid === 231747), player);
    assert.deepEqual(rows(decoded, 'teamplayerlinks').filter(row => row.playerid === 231747 && row.teamid !== 1), retained);
    assert.equal(rows(decoded, 'teamplayerlinks').some(row => row.playerid === 231747 && row.teamid === 243), false);
    assert.equal(rows(decoded, 'teamplayerlinks').find(row => row.playerid === 231747 && row.teamid === 1).jerseynumber, result.jerseyNumber);
    assertCrcs(output, decoded.databases[0]);
    assert.deepEqual(await readFile(fileURLToPath(url)), bytes);
  });
}
