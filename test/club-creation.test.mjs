import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { ClubCreationService, EaFileError, eaFileJsonChunks, loadTemplateMetadata, parseEaFile, parseFifaDatabase,
  readTemplateDatabase, serializeEaFile, serializeFifaDatabase, withFileOperations } from '../dist/index.js';
import { assertCrcs } from './binary-assertions.mjs';
import { makeSave } from './fixtures.mjs';
import { clubFixture } from './club-fixtures.mjs';

const input = { name: 'Novo FC', leagueId: 13, colors: ['#123456', '#FFFFFF'] };
const table = (f, name) => f.databases[0].tables.find(t => t.name === name);
const rows = (f, name) => table(f, name).records;
const fixture = options => { const s = clubFixture(options); return { ...s, file: parseEaFile(s.bytes, { metadata: s.metadata }) }; };
const unchanged = (file, action, code = 'INVALID_CLUB_CREATION') => {
  const before = JSON.stringify(file);
  assert.throws(action, e => e instanceof EaFileError && e.code === code);
  assert.equal(JSON.stringify(file), before);
};

for (const profile of ['FC 25', 'FC 26', 'FC 27', 'schema', 'fifa-db']) {
  test(`clubs: creates related records and reserves referenced IDs (${profile})`, () => {
    const block = profile === 'FC 25' || profile === 'FC 26';
    const { file } = fixture({ legacy: profile === 'FC 25', blockMentalities: block }); withFileOperations(file, profile);
    const originals = structuredClone(rows(file, 'teams'));
    const r = file.createClub(input);
    assert.equal(r.profile, profile); assert.equal(r.teamId, 901); assert.equal(r.templateTeamId, 1);
    assert.equal(r.created, true); assert.equal(r.idGenerated, true); assert.equal(r.rosterSize, 0);
    assert.equal(r.countryId, 14); assert.equal(r.stadiumId, 10); assert.equal(r.kits.length, 4);
    assert.deepEqual(r.colors, [{ r: 18, g: 52, b: 86 }, { r: 255, g: 255, b: 255 }]);
    assert.equal(r.team.teamcolor1r, 18); assert.equal(r.team.teamcolor2r, 255); assert.equal(r.team.teamcolor3r, 18);
    assert.equal(r.team.captainid, -1); assert.equal(r.team.domesticcups, 0); assert.equal(r.team.leaguetitles, 0);
    assert.equal(r.team.foundationyear, profile === 'FC 25' ? 2024 : profile === 'FC 26' ? 2025 : 2026);
    assert.deepEqual(rows(file, 'teams').slice(0, 3), originals);
    assert.equal(rows(file, 'teamplayerlinks').length, 1);
    assert.equal(rows(file, 'temp_teams').at(-1).teamid, r.teamId);
    const league = rows(file, 'leagueteamlinks').at(-1);
    assert.equal(league.leagueid, 13); assert.equal(league.currenttableposition, 3); assert.equal(league.artificialkey, 3);
    assert.deepEqual(rows(file, 'teamnationlinks').at(-1), { teamid: r.teamId, leagueid: 13, nationid: 14 });
    assert.equal(rows(file, 'teamstadiumlinks').at(-1).stadiumid, 10);
    const mentality = rows(file, 'default_mentalities').find(m => m.teamid === r.teamId);
    assert.equal(mentality.sourceformationid, r.formationId); assert.equal(mentality.playerid0, -1);
    assert.equal(rows(file, 'default_mentalities').length, (block ? 15 : 3) + (block ? 5 : 1));
    for (const row of rows(file, 'default_mentalities').slice(block ? 15 : 3)) assert.equal(row.playerid0, -1);
    assert.ok(Object.entries(rows(file, 'default_teamsheets').at(-1)).filter(([k]) => /^playerid/.test(k)).every(([, v]) => v === -1));
    assert.equal(rows(file, 'manager').at(-1).managerid, r.managerId);
    assert.equal(rows(file, 'manager').at(-1).firstname, 'Club');
    for (const k of r.kits) {
      assert.equal(k.record.teamtechid, r.teamId); assert.equal(k.record.teamkittypetechid, k.typeId);
      assert.equal(k.generic, profile !== 'FC 25');
      assert.equal(rows(file, 'teamkithudvalues').find(h => h.teamkitid === k.kitId).teamid, r.teamId);
    }
    assert.equal(r.assets.externalKitTexturesRequired, profile === 'FC 25');
  });
}

test('clubs: manual configuration overrides defaults without stealing existing relationships', () => {
  const { file } = fixture();
  const r = file.createClub({ ...input, teamId: 1000, assetId: 1, colors: [{ r: 1, g: 2, b: 3 }, '#ABABAB', '#CCCCCC'],
    foundationYear: 1990, baseRating: 82, defensiveDepth: 75, countryId: 54, stadiumId: 10, stadiumName: 'New Arena', templateTeamId: 2,
    fields: { clubworth: 10000000 }, formation: { formationId: 100, templateFormationId: 1, fields: { formationname: 'Custom', offset1x: 0.5 } },
    manager: { managerId: 50, firstName: 'New', lastName: 'Coach', nationality: 54 },
    kits: { home: { kitId: 100, templateKitId: 10, colors: ['#ABCDEF'], numberColor: '#000000', jerseyTemplateIndex: 3,
      shortsTemplateIndex: 1, socksTemplateIndex: 2, hudPattern: 4, year: 2026, fields: { jerseynamefonttype: 99 } }, third: false } }, { autoGenerateId: false });
  assert.equal(r.teamId, 1000); assert.equal(r.idGenerated, false); assert.equal(r.assetId, 1); assert.equal(r.assets.badgeAssetProvided, true);
  assert.equal(r.team.overallrating, 82); assert.equal(r.team.foundationyear, 1990); assert.equal(r.team.clubworth, 10000000);
  assert.equal(r.team.teamcolor3r, 204); assert.equal(r.formationId, 100); assert.equal(r.managerId, 50); assert.equal(r.kits.length, 3);
  assert.equal(r.kits[0].kitId, 100); assert.equal(r.kits[0].record.teamcolorprimr, 171);
  assert.equal(r.kits[0].record.jerseynamecolorr, 0); assert.equal(r.kits[0].record.jerseynamefonttype, 99);
  assert.equal(r.kits[0].record.jerseytemplateindex, 3); assert.equal(r.kits[0].record.year, 2026);
  assert.equal(rows(file, 'teamkithudvalues')[0].pattern, 4);
  assert.equal(rows(file, 'stadiumassignments')[0].stadiumcustomname, 'New Arena');
  const next = file.createClub(input); assert.equal(next.teamId, 1001); assert.notEqual(next.managerId, r.managerId);
});

test('clubs: previews are deterministic and female leagues inherit the correct gender', () => {
  const { file } = fixture(), before = JSON.stringify(file);
  const a = file.createClub({ ...input, leagueId: 14, colors: ['#AA0000'] }, { dryRun: true });
  const b = new ClubCreationService().create(file, { ...input, leagueId: 14, colors: ['#AA0000'] }, { dryRun: true });
  assert.deepEqual(a, b); assert.equal(a.created, false); assert.equal(a.team.gender, 1); assert.equal(a.templateTeamId, 3);
  assert.equal(JSON.stringify(file), before);
  assert.equal(file.createClub({ ...input, leagueId: 14, colors: ['#AA0000'] }).teamId, a.teamId);
});

test('clubs: rejects malformed colors, arguments, managed fields, and references atomically', () => {
  const { file } = fixture();
  for (const change of [{ colors: undefined }, { colors: [] }, { colors: ['#FFF'] }, { colors: ['#GG0000'] },
    { colors: [{ r: 1, g: -1, b: 255 }] }, { colors: ['#000000', '#000000', '#000000', '#000000'] },
    { name: '' }, { name: 'x'.repeat(41) }, { name: 'Bad\0Name' }, { leagueId: 99 }, { leagueId: 404 },
    { gender: 1 }, { teamId: 1 }, { countryId: 404 }, { stadiumId: 404 }, { templateTeamId: 3 },
    { baseRating: 100 }, { fields: { teamcolor1r: 1 } }, { fields: { teamid: 4 } }, { fields: { unknown: 1 } },
    { formation: { formationId: 1 } }, { formation: { templateFormationId: 404 } },
    { manager: { managerId: 1 } }, { manager: { nationality: 404 } },
    { kits: { home: { kitId: 10 } } }, { kits: { home: { jerseyTemplateIndex: 12 } } },
    { kits: { home: { fields: { teamtechid: 10 } } } }, { unexpected: true }]) unchanged(file, () => file.createClub({ ...input, ...change }));
  for (const options of [{ autoGenerateId: false }, { dryRun: 'true' }, { autoGenerateId: 1 }, { databaseIndex: -1 }, { referenceYear: 0 }, { unknown: true }]) unchanged(file, () => file.createClub(input, options));
  for (const teamId of [1, 900, 200001, -1]) unchanged(file, () => file.createClub({ ...input, teamId }, { autoGenerateId: false }));
  Object.defineProperty(table(file, 'manager'), 'records', { writable: false });
  unchanged(file, () => file.createClub(input));
});

test('clubs: rejects careers, ambiguous databases, incomplete mappings, and unsupported generic uniforms', () => {
  const { file } = fixture();
  unchanged({ ...file, source: { ...file.source, kind: 'career' } }, () => new ClubCreationService().create({ ...file, source: { ...file.source, kind: 'career' } }, input), 'UNSUPPORTED_OPERATION');
  const duplicate = { ...file, databases: [...file.databases, { ...file.databases[0], index: 1 }] };
  unchanged(duplicate, () => new ClubCreationService().create(duplicate, input));
  assert.equal(new ClubCreationService().create(duplicate, input, { databaseIndex: 1, dryRun: true }).databaseIndex, 1);
  const missing = { ...file, databases: [{ ...file.databases[0], tables: file.databases[0].tables.slice(1) }] };
  unchanged(missing, () => new ClubCreationService().create(missing, input, { databaseIndex: 0 }));
  const legacy = fixture({ legacy: true }).file;
  unchanged(legacy, () => legacy.createClub({ ...input, kits: { home: { generic: true } } }));
  unchanged(legacy, () => legacy.createClub({ ...input, kits: { home: { jerseyTemplateIndex: 1 } } }));
});

test('clubs: restores JSON snapshots and excludes the shortcut from incremental exports', () => {
  const { file } = fixture();
  assert.equal(Object.getOwnPropertyDescriptor(file, 'createClub').enumerable, false);
  const json = JSON.parse(JSON.stringify(file)); assert.equal(json.createClub, undefined);
  assert.equal([...eaFileJsonChunks(file)].join('').includes('createClub'), false);
  const restored = withFileOperations(json); assert.equal(restored.createClub(input).created, true);
  assert.equal(structuredClone(file).createClub, undefined);
});

test('clubs: synchronizes active tactical mirrors, sheets, formation links, and stadium caches', () => {
  const { file } = fixture();
  const db = file.databases[0], sourceSheet = table(file, 'default_teamsheets'), sourceMentality = table(file, 'default_mentalities');
  const key = (name, low = 0, high = 2000) => ({ ...sourceSheet.fields[0], name, rangeLow: low, rangeHigh: high });
  const add = (source, name, extra, records) => {
    const t = { ...source, name, fields: [...source.fields, ...extra], records }; db.tables.push(t); db.tableCount++; return t;
  };
  add(sourceSheet, 'teamsheets', [key('teamsheetid'), key('profileid', -1)], [
    { ...sourceSheet.records[0], teamsheetid: 6, profileid: 1 }, { ...sourceSheet.records[0], teamid: 0, teamsheetid: 7, profileid: -1 }]);
  add(sourceMentality, 'mentalities', [key('teamsheetid'), key('profileid', -1)], [{ ...sourceMentality.records[0], teamsheetid: 6, profileid: 1 }]);
  add(sourceMentality, 'cm_default_mentalities', [], [sourceMentality.records[0]]);
  add(table(file, 'formations'), 'temp_formations', [], [rows(file, 'formations')[0]]);
  const stadiumLinks = table(file, 'teamstadiumlinks');
  add(stadiumLinks, 'teamstadiumlinkscache', [], [stadiumLinks.records[0]]);
  const r = file.createClub(input), sheet = rows(file, 'teamsheets').at(-1), mentality = rows(file, 'mentalities').at(-1);
  assert.equal(sheet.teamid, r.teamId); assert.equal(sheet.teamsheetid, 8); assert.equal(sheet.playerid0, -1);
  assert.equal(mentality.teamid, r.teamId); assert.equal(mentality.teamsheetid, 8); assert.equal(mentality.playerid0, -1);
  assert.equal(mentality.sourceformationid, r.formationId);
  assert.equal(rows(file, 'cm_default_mentalities').at(-1).teamid, r.teamId);
  assert.equal(rows(file, 'temp_formations').at(-1).formationid, r.formationId);
  assert.equal(rows(file, 'teamstadiumlinkscache').at(-1).teamid, r.teamId);
});

test('clubs: detects five-row FIFA mentality blocks and finds free IDs after the mapped maximum', () => {
  const { file } = fixture({ blockMentalities: true });
  const teams = table(file, 'teams'), id = teams.fields.find(f => f.name === 'teamid');
  id.rangeHigh = 901;
  const a = file.createClub(input), b = file.createClub(input);
  assert.equal(a.teamId, 901); assert.equal(b.teamId, 4);
  assert.equal(rows(file, 'default_mentalities').length, 25);
  const tail = rows(file, 'default_mentalities').slice(-5);
  assert.equal(tail[0].teamid, b.teamId); assert.ok(tail.slice(1).every(r => r.teamid === -1));
  assert.ok(tail.every((r, i) => r.mentalityid === tail[0].mentalityid + i));
  const limited = table(file, 'teamkits').fields.find(f => f.name === 'teamkitid');
  limited.rangeHigh = 1;
  unchanged(file, () => file.createClub({ ...input, kits: { home: { kitId: 2 } } }));
});

for (const big of [false, true]) {
  test(`clubs: database/XML and squad binary round trips (${big ? 'big' : 'little'} endian)`, () => {
    const source = clubFixture({ big });
    const db = parseFifaDatabase(source.bytes, source.xml), r = db.createClub(input);
    const bytes = serializeFifaDatabase(source.bytes, source.xml, db);
    const decoded = parseFifaDatabase(bytes, source.xml);
    for (const actual of decoded.databases[0].tables) assert.deepEqual(actual.records, table(db, actual.name).records);
    assertCrcs(bytes, decoded.databases[0]); assert.equal(rows(decoded, 'teams').at(-1).teamid, r.teamId);
    const save = makeSave([source.bytes]), file = parseEaFile(save, { metadata: source.metadata, kind: 'squad' });
    file.createClub(input);
    const output = serializeEaFile(save, file), reread = parseEaFile(output, { metadata: source.metadata, kind: 'squad' });
    assert.equal(output.length, save.length); assert.equal(reread.databases[0].offset, file.databases[0].offset);
    for (const actual of reread.databases[0].tables) assert.deepEqual(actual.records, table(file, actual.name).records);
    assertCrcs(output, reread.databases[0]);
  });
}

for (const version of ['FC 25', 'FC 26', 'FC 27']) {
  test(`clubs: complete ${version} template round trip and subsequent roster shortcuts`, async () => {
    const source = new URL(`../templates/${version}/fifa_ng_db.db`, import.meta.url), bytes = await readFile(source);
    const file = await readTemplateDatabase({ version });
    const r = file.createClub({ ...input, stadiumName: 'New Arena' });
    const player = file.createPlayer({ firstName: 'New', lastName: 'Player', position: 'GK', nationality: 54, teamId: r.teamId });
    const transfer = file.transferPlayer(231747, r.teamId, { fromTeamId: 243 });
    assert.equal(transfer.changed, true); assert.equal(player.teamId, r.teamId);
    const output = serializeEaFile(bytes, file), metadata = await loadTemplateMetadata(version);
    const decoded = parseEaFile(output, { metadata });
    for (const actual of decoded.databases[0].tables) assert.deepEqual(actual.records, table(file, actual.name).records);
    assert.deepEqual(decoded.warnings, []); assertCrcs(output, decoded.databases[0]);
    assert.equal(rows(decoded, 'teamplayerlinks').filter(p => p.teamid === r.teamId).length, 2);
    assert.deepEqual(rows(decoded, 'teams').find(t => t.teamid === r.teamId), r.team);
    assert.deepEqual(await readFile(source), bytes);
  });
}
