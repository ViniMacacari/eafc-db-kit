import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { EaFileError, PLAYER_POSITIONS, PLAYER_ATTRIBUTES, PlayerCreationService, parseEaFile, parseFifaDatabase,
  readTemplateDatabase, loadTemplateMetadata, serializeEaFile, serializeFifaDatabase, withFileOperations, eaFileJsonChunks } from '../dist/index.js';
import { assertCrcs } from './binary-assertions.mjs';
import { makeSave } from './fixtures.mjs';
import { creationFixture } from './creation-fixtures.mjs';

const input = { firstName: 'João', lastName: 'Teste', teamId: 1, position: 'CB', nationality: 54 };
const table = (f, name) => f.databases[0].tables.find(t => t.name === name);
const rows = (f, name) => table(f, name).records;
const fixture = () => { const source = creationFixture(); return { ...source, file: parseEaFile(source.bytes, { metadata: source.metadata }) }; };
const unchanged = (file, action, expected = 'INVALID_PLAYER_CREATION') => {
  const before = JSON.stringify(file);
  assert.throws(action, error => error instanceof EaFileError && error.code === expected);
  assert.equal(JSON.stringify(file), before);
};

for (const profile of ['FC 25', 'FC 26', 'FC 27', 'schema', 'fifa-db']) {
  test(`creation: registers a player and all applicable roster/name records (${profile})`, () => {
    const { file } = fixture(); withFileOperations(file, profile);
    const special = structuredClone(rows(file, 'cmplayers'));
    const result = file.createPlayer({ ...input, nationalTeamId: 3 });
    assert.equal(result.profile, profile); assert.equal(result.playerId, 901); assert.equal(result.created, true);
    assert.equal(result.idGenerated, true); assert.equal(result.randomSeed, null); assert.deepEqual(result.randomizedFields, []);
    assert.deepEqual(result.values, result.baseValues);
    const player = rows(file, 'players').find(row => row.playerid === result.playerId);
    assert.equal(player.preferredposition1, 5); assert.equal(player.overallrating, 70); assert.equal(player.gender, 0);
    assert.equal(player.headassetid, result.playerId); assert.equal(player.headclasscode, 1); assert.equal(player.trait1, 0);
    assert.equal(rows(file, 'createplayer')[0].create_playerid, result.playerId);
    assert.equal(rows(file, 'createplayer')[0].create_originalplayerid, 100);
    for (const part of ['skeletal', 'flesh', 'fat']) {
      assert.deepEqual(rows(file, `cp_${part}`)[0], { assetid: result.playerId, shape: 25 });
      assert.deepEqual(rows(file, `dc_${part}`), [{ assetid: 100, shape: 25 }]);
    }
    assert.equal(rows(file, 'playernamemap')[0].commentaryid, 900000);
    assert.equal(rows(file, 'editedplayernames')[0].firstname, 'João');
    assert.equal(rows(file, 'dcplayernames').find(row => row.nameid === player.firstnameid).name, 'João');
    assert.equal(player.lastnameid, player.playerjerseynameid);
    assert.equal(rows(file, 'temp_players').at(-1).playerid, result.playerId);
    assert.equal(rows(file, 'temp_teamplayerlinks').at(-1).playerid, result.playerId);
    assert.equal(rows(file, 'teamplayerlinks_vh').length, 1);
    assert.equal(rows(file, 'teamplayerlinks').filter(row => row.playerid === result.playerId).length, 2);
    for (const name of ['default_teamsheets', 'teamsheets', 'cm_teamsheets']) {
      assert.equal(rows(file, name).find(row => row.teamid === 1).playerid11, result.playerId);
    }
    assert.deepEqual(rows(file, 'cmplayers'), special); assert.deepEqual(rows(file, 'playerloans'), []);
    assert.ok(result.values.standingtackle > result.values.finishing);
  });
}

test('creation: covers all 28 positions with deterministic position-specific base values', () => {
  const { file } = fixture(), generated = {};
  for (const [position, id] of Object.entries(PLAYER_POSITIONS)) {
    const result = file.createPlayer({ ...input, position }, { dryRun: true });
    assert.equal(result.player.preferredposition1, id); assert.equal(result.created, false);
    for (const field of PLAYER_ATTRIBUTES) assert.ok(result.values[field] >= 1 && result.values[field] <= 99);
    generated[position] = result.values;
  }
  assert.ok(generated.GK.gkreflexes > generated.GK.finishing);
  assert.ok(generated.CB.standingtackle > generated.CB.finishing);
  assert.ok(generated.CDM.interceptions > generated.CDM.finishing);
  assert.ok(generated.CM.shortpassing > generated.CM.standingtackle);
  assert.ok(generated.CAM.vision > generated.CAM.defensiveawareness);
  assert.ok(generated.RB.crossing > generated.RB.finishing);
  assert.ok(generated.RW.acceleration > generated.RW.standingtackle);
  assert.ok(generated.ST.finishing > generated.ST.interceptions);
  assert.equal(rows(file, 'players').length, 2);
});

test('creation: randomization is seeded, selective, bounded, and overridden by explicit values', () => {
  const { file } = fixture(), before = JSON.stringify(file);
  const options = { dryRun: true, randomize: { seed: 42, variation: 8, fields: ['strength', 'finishing', 'height'],
    ranges: { strength: { min: 82, max: 85 }, height: { min: 190, max: 195 } } } };
  const a = file.createPlayer(input, options), b = file.createPlayer(input, options);
  assert.deepEqual(a, b); assert.equal(a.randomSeed, 42);
  assert.ok(a.values.strength >= 82 && a.values.strength <= 85);
  assert.ok(a.values.height >= 190 && a.values.height <= 195);
  assert.equal(a.values.interceptions, a.baseValues.interceptions);
  assert.deepEqual(a.randomizedFields, ['strength', 'finishing', 'height']);
  const explicit = file.createPlayer({ ...input, height: 185, attributes: { strength: 90 } }, options);
  assert.equal(explicit.values.strength, 90); assert.equal(explicit.values.height, 185);
  assert.deepEqual(explicit.randomizedFields, ['finishing']); assert.equal(JSON.stringify(file), before);
  const accepted = file.createPlayer(input, { ...options, dryRun: false });
  assert.equal(accepted.playerId, a.playerId); assert.deepEqual(accepted.values, a.values);
});

test('creation: supports manual IDs, repeated creation, female teams, and subsequent transfers', () => {
  const { file } = fixture();
  const a = file.createPlayer({ ...input, playerId: 1000, skillMoves: 4, weakFootAbility: 5 }, { autoGenerateId: false });
  assert.equal(a.playerId, 1000); assert.equal(a.idGenerated, false);
  assert.equal(a.player.skillmoves, 4); assert.equal(a.player.weakfootabilitytypecode, 5);
  const b = file.createPlayer({ ...input, teamId: 4 }); assert.equal(b.playerId, 1001); assert.equal(b.player.gender, 1);
  assert.equal(rows(file, 'cp_skeletal').find(row => row.assetid === b.playerId).shape, 0);
  file.transferPlayer(a.playerId, 2);
  assert.equal(rows(file, 'teamplayerlinks').find(row => row.playerid === a.playerId).teamid, 2);
  assert.equal(new Set(rows(file, 'teamplayerlinks').map(row => row.artificialkey)).size, rows(file, 'teamplayerlinks').length);
});

test('creation: reuses existing names and supports name banks or edited names independently', () => {
  for (const remove of [['dcplayernames'], ['dcplayernames', 'playernames'], ['editedplayernames']]) {
    const { file } = fixture();
    file.databases[0].tables = file.databases[0].tables.filter(t => !remove.includes(t.name));
    file.databases[0].tableCount = file.databases[0].tables.length;
    const a = file.createPlayer({ ...input, firstName: 'Existente', lastName: 'Existente' });
    assert.equal(a.player.firstnameid, a.player.lastnameid);
    if (!remove.includes('dcplayernames')) assert.equal(a.player.firstnameid, 44000);
  }
});

for (const big of [false, true]) for (const kind of ['database', 'squad', 'fifa-db']) {
  test(`creation: writes and rereads linked records (${kind}, ${big ? 'BE' : 'LE'})`, () => {
    const { bytes, metadata, xml } = creationFixture({ big });
    const source = kind === 'squad' ? makeSave([bytes]) : bytes, original = Buffer.from(source);
    const file = kind === 'fifa-db' ? parseFifaDatabase(source, xml) : parseEaFile(source, { metadata, kind });
    const result = file.createPlayer({ ...input, position: 'GK', nationalTeamId: 3 });
    const output = kind === 'fifa-db' ? serializeFifaDatabase(source, xml, file) : serializeEaFile(source, file);
    const written = kind === 'fifa-db' ? parseFifaDatabase(output, xml) : parseEaFile(output, { metadata, kind });
    for (const expected of file.databases[0].tables) assert.deepEqual(table(written, expected.name).records, expected.records);
    assert.equal(rows(written, 'players').find(r => r.playerid === result.playerId).gkreflexes, result.values.gkreflexes);
    assertCrcs(output, written.databases[0]); assert.deepEqual(source, original);
    if (kind === 'squad') { assert.equal(output.length, source.length); assert.equal(written.databases[0].offset, file.databases[0].offset); }
  });
}

test('creation: validates options, random settings, identity, and explicit attributes before mutation', () => {
  const { file } = fixture();
  for (const [data, options] of [[null, {}], [input, null], [{ ...input, position: 'XYZ' }, {}],
    [{ ...input, playerId: 1000 }, {}], [input, { autoGenerateId: false }], [input, { autoGenerateId: 1 }],
    [{ ...input, teamId: 0 }, {}], [{ ...input, baseRating: 100 }, {}], [{ ...input, potential: 30 }, {}],
    [{ ...input, birthDate: '2025-02-30' }, {}], [{ ...input, attributes: { strength: 100 } }, {}],
    [input, { randomize: { seed: -1 } }], [input, { randomize: { fields: ['playerid'] } }],
    [input, { randomize: { ranges: { strength: { min: 90, max: 70 } } } }]]) {
    unchanged(file, () => file.createPlayer(data, options), 'INVALID_OPTIONS');
  }
});

test('creation: refuses collisions, invalid memberships, full squads, and invalid text atomically', () => {
  for (const change of [
    file => { rows(file, 'teams').splice(0, 1); },
    file => { rows(file, 'leagueteamlinks').splice(0, 1); },
    file => { rows(file, 'default_teamsheets')[0].playerid11 = 10; rows(file, 'default_teamsheets')[0].playerid12 = 11; rows(file, 'default_teamsheets')[0].playerid13 = 12; rows(file, 'default_teamsheets')[0].playerid14 = 13; },
    file => { Object.freeze(table(file, 'players')); },
    file => { table(file, 'dcplayernames').fields.find(f => f.name === 'nameid').rangeHigh = 44000; },
  ]) { const { file } = fixture(); change(file); unchanged(file, () => file.createPlayer(input)); }
  const { file } = fixture();
  for (const data of [{ ...input, teamId: 3 }, { ...input, nationalTeamId: 2 }, { ...input, jerseyNumber: 7 },
    { ...input, firstName: 'é'.repeat(25) }, { ...input, fields: { playerid: 50 } }, { ...input, fields: { bogus: 1 } }]) {
    unchanged(file, () => file.createPlayer(data));
  }
  unchanged(file, () => file.createPlayer({ ...input, playerId: 900 }, { autoGenerateId: false }));
});

test('creation: rejects careers, incomplete reads, unmapped schemas, and ambiguous databases', () => {
  const { bytes, metadata } = creationFixture();
  const career = parseEaFile(makeSave([bytes]), { metadata, kind: 'career' });
  unchanged(career, () => career.createPlayer(input), 'UNSUPPORTED_OPERATION');
  const filtered = parseEaFile(bytes, { metadata, tables: ['players', 'teams', 'teamplayerlinks'] });
  unchanged(filtered, () => filtered.createPlayer(input), 'UNSUPPORTED_OPERATION');
  const partial = fixture().file; table(partial, 'editedplayernames').metadataComplete = false;
  unchanged(partial, () => partial.createPlayer(input), 'UNSUPPORTED_OPERATION');
  const file = parseEaFile(makeSave([bytes, bytes]), { metadata, kind: 'squad' });
  unchanged(file, () => file.createPlayer(input));
  const original = structuredClone(file.databases[0]);
  assert.equal(file.createPlayer(input, { databaseIndex: 1 }).databaseIndex, 1);
  assert.deepEqual(file.databases[0], original);
});

test('creation: methods stay outside JSON and can be restored on imported snapshots', () => {
  const { file } = fixture();
  assert.equal(Object.keys(file).includes('createPlayer'), false);
  const json = JSON.stringify(file);
  assert.deepEqual(JSON.parse([...eaFileJsonChunks(file)].join('')), JSON.parse(json));
  const clone = structuredClone(file); assert.equal(clone.createPlayer, undefined);
  const hydrated = withFileOperations(JSON.parse(json), 'FC 27'), create = hydrated.createPlayer;
  assert.equal(create(input).profile, 'FC 27');
  assert.equal(new PlayerCreationService('FC 25').create(JSON.parse(json), input).profile, 'FC 25');
});

test('creation: keeps generated ratings in bounds at both ends of the scale', () => {
  const { file } = fixture();
  for (const position of Object.keys(PLAYER_POSITIONS)) for (const baseRating of [1, 99]) {
    const result = file.createPlayer({ ...input, position, baseRating }, { dryRun: true, randomize: { seed: 0, variation: 99 } });
    for (const field of PLAYER_ATTRIBUTES) assert.ok(result.values[field] >= 1 && result.values[field] <= 99);
    assert.ok(result.values.potential >= baseRating);
    assert.equal(result.player.overallrating, baseRating);
  }
  unchanged(file, () => file.createPlayer(input, { randomize: { ranges: { strength: { min: 100, max: 110 } } } }), 'INVALID_OPTIONS');
});

test('creation: finds unused ID gaps when references occupy the maximum mapped ID', () => {
  for (const name of ['previousteam', 'cp_skeletal']) {
    const { file } = fixture();
    if (name === 'previousteam') rows(file, name)[0].playerid = 500000;
    else rows(file, name).push({ assetid: 500000, shape: 0 });
    const result = file.createPlayer(input);
    assert.equal(result.playerId, 1);
    unchanged(file, () => file.createPlayer({ ...input, playerId: 500000 }, { autoGenerateId: false }));
  }
});

test('creation: leaves inactive temporary tables and unrelated mode records untouched', () => {
  const { file } = fixture();
  table(file, 'temp_players').records = [];
  table(file, 'temp_teamplayerlinks').records = [];
  const virtual = structuredClone(rows(file, 'teamplayerlinks_vh'));
  file.createPlayer(input);
  assert.deepEqual(rows(file, 'temp_players'), []);
  assert.deepEqual(rows(file, 'temp_teamplayerlinks'), []);
  assert.deepEqual(rows(file, 'teamplayerlinks_vh'), virtual);
});

for (const version of ['FC 25', 'FC 26', 'FC 27']) {
  test(`integration: creates and rereads a player in the bundled ${version} database`, async () => {
    const url = new URL(`../templates/${version}/fifa_ng_db.db`, import.meta.url), bytes = await readFile(url);
    const file = await readTemplateDatabase({ version });
    const result = file.createPlayer({ ...input, position: 'ST' }, { randomize: { seed: 123 } });
    const output = serializeEaFile(bytes, file), metadata = await loadTemplateMetadata(version);
    const written = parseEaFile(output, { metadata, tables: result.tables.map(t => t.name) });
    for (const expected of result.tables) assert.deepEqual(table(written, expected.name).records, table(file, expected.name).records);
    assert.deepEqual(rows(written, 'players').find(row => row.playerid === result.playerId), result.player);
    assertCrcs(output, written.databases[0]); assert.deepEqual(await readFile(url), bytes);
  });
}
