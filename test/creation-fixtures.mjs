import { mappedDatabaseFixture } from './database-fixture.mjs';
import { PLAYER_ATTRIBUTES } from '../dist/index.js';

const int = (name, low = 0, high = 500000) => ({ name, low, high, type: 3, width: 4 });
const text = (name, width) => ({ name, low: 0, high: 0, type: 0, width });
const playerFields = [int('playerid'), int('preferredposition1', 0, 27), int('preferredposition2', -1, 27),
  int('gender', 0, 1), int('nationality', 1, 3000), int('overallrating', 1, 99),
  ...PLAYER_ATTRIBUTES.map(name => int(name, 1, 99)), int('potential', 1, 99), int('height', 130, 215),
  int('weight', 30, 115), int('skillmoves', 0, 5), int('weakfootabilitytypecode', 1, 5),
  int('firstnameid', 0, 50000), int('lastnameid', 0, 50000), int('commonnameid', 0, 50000), int('playerjerseynameid', 0, 50000),
  int('headassetid'), int('headclasscode', 0, 1), int('hashighqualityhead', 0, 1), int('bodytypecode', 1, 512),
  int('headtypecode', 0, 16000), int('birthdate', 0, 1048575), int('playerjointeamdate', 0, 1048575),
  int('contractvaliduntil', 1900, 2100), int('usercaneditname', 0, 1), int('iscustomized', 0, 1),
  int('preferredfoot', 0, 1), int('trait1'), int('role1'),
  ...['pacdiv', 'shohan', 'paskic', 'driref', 'defspe', 'phypos'].map(name => int(name, 1, 99))];
const blank = fields => Object.fromEntries(fields.map(f => [f.name, f.type === 0 ? '' : Math.max(0, f.low)]));
const player = id => ({ ...blank(playerFields), playerid: id, preferredposition1: 5, preferredposition2: -1,
  headclasscode: 1, headassetid: id, headtypecode: 1505, bodytypecode: 1, nationality: 54, overallrating: 70, gender: 0,
  ...Object.fromEntries(PLAYER_ATTRIBUTES.map(name => [name, 70])), potential: 75, height: 180, weight: 77 });
const linkFields = ['playerid', 'teamid', 'artificialkey', 'injury', 'leaguegoals', 'yellows'].map(name => int(name))
  .concat([int('jerseynumber', 1, 99), int('position', 0, 33), int('form', 0, 5)]);
const link = (id, team, key, shirt) => ({ ...blank(linkFields), playerid: id, teamid: team,
  artificialkey: key, jerseynumber: shirt, position: 29, form: 3 });
const sheetFields = [int('teamid'), ...Array.from({ length: 15 }, (_, i) => int(`playerid${i}`, -1))];
const sheet = (team, id) => ({ teamid: team, ...Object.fromEntries(Array.from({ length: 15 }, (_, i) => [`playerid${i}`, i === 1 ? id : -1])) });

export function creationFixture({ big = false, padding = 4096 } = {}) {
  const definitions = [
    ['players', playerFields, [player(100), player(101)]],
    ['teams', [int('teamid'), int('gender', 0, 1)], [1, 2, 3, 4].map(teamid => ({ teamid, gender: teamid === 4 ? 1 : 0 }))],
    ['leagues', [int('leagueid'), int('isinternationalleague', 0, 1)], [{ leagueid: 1, isinternationalleague: 0 }, { leagueid: 2, isinternationalleague: 1 }]],
    ['leagueteamlinks', [int('leagueid'), int('teamid')], [1, 2, 3, 4].map(teamid => ({ teamid, leagueid: teamid === 3 ? 2 : 1 }))],
    ['teamplayerlinks', linkFields, [link(100, 1, 0, 7), link(101, 2, 1, 9), link(100, 3, 2, 9)]],
    ['default_teamsheets', sheetFields, [sheet(1, 100), sheet(2, 101), sheet(3, 100), sheet(4, -1)]],
    ['teamsheets', sheetFields, [sheet(1, 100), sheet(2, 101)]],
    ['cm_teamsheets', sheetFields, [sheet(1, 100)]],
    ['temp_players', playerFields, [player(100)]],
    ['temp_teamplayerlinks', linkFields, [link(100, 1, 0, 7)]],
    ['teamplayerlinks_vh', linkFields, [link(101, 2, 0, 9)]],
    ['playernames', [int('nameid', 0, 43999), text('name', 40), int('commentaryid', 0, 1000000)], [{ nameid: 0, name: '', commentaryid: 900000 }]],
    ['dcplayernames', [int('nameid', 44000, 50000), text('name', 38)], [{ nameid: 44000, name: 'Existente' }]],
    ['editedplayernames', [int('playerid'), ...['firstname', 'surname', 'commonname', 'playerjerseyname'].map(name => text(name, 45))], []],
    ['createplayer', [int('create_playerid'), int('create_originalplayerid'), int('create_artificialkey'),
      int('skincolor', -1, 2147483647), int('commentaryid', -1, 1000000)], []],
    ['playernamemap', [int('playerid'), int('commentaryid', 0, 1000000)], []],
    ['previousteam', [int('playerid'), int('previousteamid')], [{ playerid: 900, previousteamid: 1 }]],
    ['cmplayers', playerFields, [player(100)]],
    ['playerloans', [int('playerid'), int('teamidloanedfrom')], []],
    ['career_playercontract', [int('playerid'), int('teamid')], []],
  ];
  for (const part of ['skeletal', 'flesh', 'fat']) {
    definitions.push([`cp_${part}`, [int('assetid', 0, 700000), int('shape', -100, 100)], []]);
    definitions.push([`dc_${part}`, [int('assetid', 0, 700000), int('shape', -100, 100)], [{ assetid: 100, shape: 25 }]]);
  }
  return mappedDatabaseFixture(definitions, { big, padding });
}
