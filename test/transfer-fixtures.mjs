const shirt = ['jerseynumber', 1, 99];
const role = name => [name, -1, 1000000];
const sheetFields = ['teamid', 'teamsheetid', 'profileid', ...Array.from({ length: 14 }, (_, i) => role(`playerid${i}`)),
  role('captainid'), role('penaltytakerid'), role('cksupport4'), role('throwerleft'),
  role('customsub0in'), role('customsub0out')];
const sheet = (teamid, firstId) => Object.fromEntries([
  ['teamid', teamid], ['teamsheetid', 0], ['profileid', 0],
  ...Array.from({ length: 14 }, (_, i) => [`playerid${i}`, i < 12 ? firstId + i : -1]),
  ['captainid', firstId + 1], ['penaltytakerid', firstId + 1], ['cksupport4', firstId + 1],
  ['throwerleft', firstId + 1], ['customsub0in', firstId + 11], ['customsub0out', firstId + 1],
]);
const link = (playerid, teamid, jerseynumber) => ({ playerid, teamid, jerseynumber,
  position: playerid === 1 || playerid === 101 ? 0 : playerid === 2 ? 24 : playerid === 12 || playerid === 112 ? 28 : 10,
  artificialkey: playerid * 10 + teamid, leaguegoals: 7, yellows: 2, injury: 3, form: 80 });

export function transferFixture({ big = false, mirrors = true } = {}) {
  const players = Array.from({ length: 24 }, (_, i) => ({ playerid: i < 12 ? i + 1 : i + 89,
    preferredposition1: i % 12 === 0 ? 0 : 10, gender: 0, overallrating: 80, contractvaliduntil: 2030 }));
  const links = players.map((p, i) => link(p.playerid, i < 12 ? 1 : 2, i % 12 + 1));
  links.push(link(2, 3, 10));
  const linkFields = ['playerid', 'teamid', shirt, 'position', 'artificialkey', 'leaguegoals', 'yellows', 'injury', 'form'];
  const definitions = [
    ['players', ['playerid', 'preferredposition1', 'gender', 'overallrating', 'contractvaliduntil'], players],
    ['teams', ['teamid', 'gender', role('captainid'), role('cksupport4')], [
      { teamid: 1, gender: 0, captainid: 2, cksupport4: 2 },
      { teamid: 2, gender: 0, captainid: 101, cksupport4: 101 },
      { teamid: 3, gender: 0, captainid: 2, cksupport4: 2 },
    ]],
    ['teamplayerlinks', linkFields, links],
    ['leagues', ['leagueid', 'isinternationalleague'], [{ leagueid: 1, isinternationalleague: 0 }, { leagueid: 2, isinternationalleague: 1 }]],
    ['leagueteamlinks', ['leagueid', 'teamid'], [{ leagueid: 1, teamid: 1 }, { leagueid: 1, teamid: 2 }, { leagueid: 2, teamid: 3 }]],
    ['default_teamsheets', sheetFields, [sheet(1, 1), sheet(2, 101), sheet(3, 1)]],
    ['teamsheets', sheetFields, [sheet(1, 1), sheet(2, 101)]],
    ['playerloans', ['playerid', 'teamidloanedfrom', 'loandateend', 'isloantobuy'], [
      { playerid: 2, teamidloanedfrom: 5, loandateend: 20000, isloantobuy: 1 },
      { playerid: 3, teamidloanedfrom: 6, loandateend: 20000, isloantobuy: 0 },
    ]],
    ['career_playercontract', ['playerid', 'teamid', 'wage'], []],
    ['career_presignedcontract', ['playerid', 'teamid', 'offeredwage'], []],
  ];
  if (mirrors) {
    for (const name of ['temp_teamplayerlinks', 'teamplayerlinks_vh']) definitions.push([name, linkFields, [{ ...links[1] }]]);
  }
  for (const name of ['default_mentalities', 'mentalities', 'cm_mentalities', 'cm_default_mentalities']) {
    definitions.push([name, ['teamid', 'mentalityid', 'teamsheetid', 'profileid', ...Array.from({ length: 11 }, (_, i) => role(`playerid${i}`))],
      [[1, 1], [2, 101], [3, 1]].map(([teamid, firstId]) => ({ teamid, mentalityid: 0, teamsheetid: 0, profileid: 0,
        ...Object.fromEntries(Array.from({ length: 11 }, (_, i) => [`playerid${i}`, firstId + i])) }))]);
  }
  const metadata = { tables: definitions.map(([name, fields], index) => ({
    shortName: `T${String(index).padStart(3, '0')}`, name,
    fields: fields.map((field, i) => ({ shortName: `F${String(i).padStart(3, '0')}`,
      name: typeof field === 'string' ? field : field[0], rangeLow: typeof field === 'string' ? 0 : field[1],
      rangeHigh: typeof field === 'string' ? 1000000 : field[2] })),
  })) };
  const bodies = definitions.map(([, , records], index) => {
    const fields = metadata.tables[index].fields, size = fields.length * 4 + 1;
    const body = Buffer.alloc(36 + fields.length * 16 + size * records.length + 4);
    const i32 = (value, offset) => big ? body.writeInt32BE(value, offset) : body.writeInt32LE(value, offset);
    const u16 = (value, offset) => big ? body.writeUInt16BE(value, offset) : body.writeUInt16LE(value, offset);
    i32(size, 4); i32(size * 8 - 1, 8); u16(records.length, 16); u16(records.length, 18);
    body[24] = fields.length;
    for (const [i, field] of fields.entries()) {
      const offset = 36 + i * 16;
      i32(3, offset); i32(i * 32, offset + 4); body.write(field.shortName, offset + 8); i32(32, offset + 12);
      for (const [j, row] of records.entries()) i32(row[field.name] - field.rangeLow, 36 + fields.length * 16 + j * size + i * 4);
    }
    return body;
  });
  const header = Buffer.alloc(28 + definitions.length * 8);
  const i32 = (value, offset) => big ? header.writeInt32BE(value, offset) : header.writeInt32LE(value, offset);
  header.set([0x44, 0x42, 0, 8, Number(big), 0, 0, 0]);
  i32(header.length + bodies.reduce((total, body) => total + body.length, 0), 8); i32(definitions.length, 16);
  let offset = 0;
  for (const [i, table] of metadata.tables.entries()) {
    header.write(table.shortName, 24 + i * 8); i32(offset, 28 + i * 8); offset += bodies[i].length;
  }
  const bytes = Buffer.concat([header, ...bodies]);
  const xml = `<database>${metadata.tables.map(table => `<table shortname="${table.shortName}" name="${table.name}"><fields>${
    table.fields.map(field => `<field shortname="${field.shortName}" name="${field.name}" rangelow="${field.rangeLow}" rangehigh="${field.rangeHigh}" />`).join('')
  }</fields></table>`).join('')}</database>`;
  return { bytes, metadata, xml };
}
