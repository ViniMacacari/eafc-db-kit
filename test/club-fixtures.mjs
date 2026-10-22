import { mappedDatabaseFixture } from './database-fixture.mjs';

const int = (name, low = 0, high = 200000) => ({ name, low, high, type: 3, width: 4 });
const text = (name, width = 40) => ({ name, low: 0, high: 0, type: 0, width });
const float = name => ({ name, low: 0, high: 0, type: 4, width: 4 });
const record = (fields, values) => ({ ...Object.fromEntries(fields.map(f => [f.name, f.type === 0 ? '' : Math.max(f.low, 0)])), ...values });

export function clubFixture({ big = false, legacy = false, blockMentalities = false } = {}) {
  const teamFields = [int('teamid'), text('teamname'), int('assetid'), int('gender', 0, 1),
    ...[1, 2, 3].flatMap(i => ['r', 'g', 'b'].map(c => int(`teamcolor${i}${c}`, 0, 255))),
    int('overallrating', 1, 99), int('foundationyear', 1800, 2050), int('rivalteam', 1), int('captainid', -1, 500000),
    int('domesticcups'), int('leaguetitles'), int('defensivedepth', 1, 100), int('trainingstadium', 0, 2000), int('teamstadiumcapacity'), int('clubworth', 0, 100000000)];
  const kitFields = [int('teamkitid', 0, 50000), int('teamtechid'), int('teamkittypetechid', 0, 22), int('year', 0, 2027),
    ...['teamcolorprim', 'teamcolorsec', 'teamcolortert', 'jerseynamecolor'].flatMap(p => ['r', 'g', 'b'].map(c => int(`${p}${c}`, 0, 255))),
    ...['prim', 'sec', 'tert'].map(p => int(`teamcolor${p}percent`, 0, 100)), int('jerseynamefonttype', 0, 1000),
    ...(!legacy ? [int('isgeneric', 0, 1), int('jerseytemplateindex', 0, 11), int('shortstemplateindex', 0, 2), int('sockstemplateindex', 0, 4)] : [])];
  const formationFields = [int('formationid', 0, 2000), int('teamid', -1), text('formationname'), int('position0', 0, 1), int('position1', 1, 32), float('offset1x')];
  const sheetFields = [int('teamid'), ...Array.from({ length: 15 }, (_, i) => int(`playerid${i}`, -1, 500000)), int('captainid', -1, 500000)];
  const mentalityFields = [int('teamid', -1), int('mentalityid', 0, 5000), int('sourceformationid', 0, 2000), int('playerid0', -1, 500000), int('position1', 1, 32), float('offset1x')];
  const managerFields = [int('managerid', 1, 500000), int('teamid'), text('firstname'), text('surname'), text('commonname'),
    int('gender', 0, 1), int('nationality', 1, 3000), int('headassetid'), int('headtypecode'), int('headclasscode', 0, 1), int('islicensed', 0, 1)];
  const teams = [1, 2, 3].map(teamid => record(teamFields, { teamid, teamname: `Club ${teamid}`, assetid: teamid,
    gender: teamid === 3 ? 1 : 0, foundationyear: 1900, rivalteam: 1, overallrating: 70, captainid: 100, domesticcups: 7, leaguetitles: 10 }));
  const defs = [
    ['teams', teamFields, teams],
    ['leagues', [int('leagueid'), int('isinternationalleague', 0, 1), int('iswomencompetition', 0, 1), int('countryid', 0, 3000)],
      [{ leagueid: 13, isinternationalleague: 0, iswomencompetition: 0, countryid: 14 }, { leagueid: 14, isinternationalleague: 0, iswomencompetition: 1, countryid: 14 }, { leagueid: 99, isinternationalleague: 1, iswomencompetition: 0, countryid: 14 }]],
    ['leagueteamlinks', [int('teamid'), int('leagueid'), int('artificialkey', 0, 4000), int('currenttableposition', 1, 256), int('previousyeartableposition', 1, 256)],
      teams.map((t, i) => ({ teamid: t.teamid, leagueid: t.gender === 1 ? 14 : 13, artificialkey: i, currenttableposition: i + 1, previousyeartableposition: i + 1 }))],
    ['nations', [int('nationid', 0, 3000)], [{ nationid: 14 }, { nationid: 54 }]],
    ['teamnationlinks', [int('teamid'), int('leagueid'), int('nationid', 0, 3000)], []],
    ['teamkits', kitFields, teams.flatMap(t => [0, 1, 2].map(type => record(kitFields, { teamkitid: t.teamid * 10 + type, teamtechid: t.teamid, teamkittypetechid: type })))],
    ['teamkithudvalues', [int('teamkitid', 0, 50000), int('teamid'), int('kittype', 0, 10), int('pattern', 0, 10)], []],
    ['formations', formationFields, teams.map(t => record(formationFields, { formationid: t.teamid, teamid: t.teamid, formationname: '4-4-2', position1: 3, offset1x: 0.75 }))],
    ['default_teamsheets', sheetFields, teams.map(t => record(sheetFields, { teamid: t.teamid, playerid0: 100 }))],
    ['default_mentalities', mentalityFields, teams.flatMap(t => Array.from({ length: blockMentalities ? 5 : 1 }, (_, i) => record(mentalityFields, {
      teamid: i === 0 ? t.teamid : -1, mentalityid: blockMentalities ? t.teamid * 5 + i : 0, sourceformationid: t.teamid, playerid0: 100, position1: 3, offset1x: 0.75 })))],
    ['defaultteamdata', [int('teamid'), int('position1', 1, 32), float('offset1x')], teams.map(t => ({ teamid: t.teamid, position1: 3, offset1x: 0.75 }))],
    ['stadiums', [int('stadiumid', 0, 2000), text('name'), int('capacity'), int('islicensed', 0, 1), int('isstadiumavailable', 0, 1), int('issmallsided', 0, 1)],
      [{ stadiumid: 10, name: 'Generic Stadium', capacity: 30000, islicensed: 0, isstadiumavailable: 1, issmallsided: 0 }]],
    ['teamstadiumlinks', [int('teamid'), int('stadiumid', 0, 2000), ...(legacy ? [text('stadiumname')] : [])], teams.map(t => ({ teamid: t.teamid, stadiumid: 10, ...(legacy ? { stadiumname: 'Old Stadium' } : {}) }))],
    ['stadiumassignments', [int('teamid'), text('stadiumcustomname')], []],
    ['manager', managerFields, teams.map(t => record(managerFields, { managerid: t.teamid, teamid: t.teamid, firstname: 'Old', surname: 'Manager', nationality: 14, gender: t.gender, headclasscode: 1, headassetid: 10 }))],
    ['history', [int('oldteamid')], [{ oldteamid: 900 }]],
    ['teamplayerlinks', [int('teamid'), int('playerid')], [{ teamid: 1, playerid: 100 }]],
    ['temp_teams', teamFields, [teams[0]]],
  ];
  return mappedDatabaseFixture(defs, { big });
}
