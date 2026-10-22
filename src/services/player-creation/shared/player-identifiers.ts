import { EaFileError } from '../../../domain/errors.js';
import type { EaDatabase, EaRecord, EaTable } from '../../../domain/models.js';
import { CreationPlan, creationFailure, emptyRecord, integerRange } from './creation-plan.js';

export function unusedInteger(table: EaTable, fieldName: string, used: ReadonlySet<number>, minimum = 1): number {
  const field = table.fields.find(field => field.name === fieldName);
  if (!field) throw new EaFileError('UNSUPPORTED_OPERATION', `Missing ${table.name}.${fieldName}.`);
  const [low, high] = integerRange(field);
  const start = Math.max(minimum, low);
  let maximum = start - 1;
  for (const value of used) if (value >= start && value <= high) maximum = Math.max(maximum, value);
  if (maximum < high) return maximum + 1;
  for (let value = start; value <= high; value++) if (!used.has(value)) return value;
  return creationFailure(`No unused ${table.name}.${fieldName} remains.`);
}

export function reservedPlayerIds(database: EaDatabase): Set<number> {
  const used = new Set<number>();
  for (const table of database.tables) {
    const fields = table.fields.filter(field => /player_?id\d*$/.test(field.name) || field.name === 'headassetid' ||
      (/^(cp|dc)_(skeletal|flesh|fat)$/.test(table.name) && field.name === 'assetid'));
    for (const row of table.records) for (const field of fields) {
      const value = row[field.name];
      if (typeof value === 'number' && value > 0) used.add(value);
    }
  }
  return used;
}

export function addPlayerNames(plan: CreationPlan, tables: ReadonlyMap<string, EaTable>, players: EaTable,
  names: { firstName: string; lastName: string; commonName: string; jerseyName: string }, player: EaRecord): void {
  const banks = ['playernames', 'dcplayernames'].flatMap(name => tables.has(name) ? [tables.get(name)!] : []);
  const target = tables.get('dcplayernames') ?? tables.get('playernames');
  const edited = tables.get('editedplayernames');
  if (!target && !edited) throw new EaFileError('UNSUPPORTED_OPERATION', 'Player creation requires a name bank or editedplayernames.');
  const used = new Set<number>();
  for (const table of tables.values()) {
    const fields = table.fields.filter(field => /^(nameid|firstnameid|lastnameid|commonnameid|playerjerseynameid)$/.test(field.name));
    for (const row of plan.records(table)) for (const field of fields) if (typeof row[field.name] === 'number') used.add(row[field.name] as number);
  }
  const resolve = (text: string): number => {
    if (!text || !target) return 0;
    for (const bank of banks) {
      const matches = plan.records(bank).filter(row => row.name === text && typeof row.nameid === 'number');
      for (const match of matches) {
        if (['firstnameid', 'lastnameid', 'commonnameid', 'playerjerseynameid'].every(name => {
          const field = players.fields.find(field => field.name === name);
          if (!field) return true;
          const [min, max] = integerRange(field);
          return (match.nameid as number) >= min && (match.nameid as number) <= max;
        })) return match.nameid as number;
      }
    }
    const id = unusedInteger(target, 'nameid', used);
    used.add(id);
    const row: EaRecord = { ...emptyRecord(target), nameid: id, name: text };
    if (Object.hasOwn(row, 'commentaryid')) row.commentaryid = 900000;
    plan.insert(target, row);
    return id;
  };
  for (const [field, text] of [['firstnameid', names.firstName], ['lastnameid', names.lastName],
    ['commonnameid', names.commonName], ['playerjerseynameid', names.jerseyName]] as const) {
    if (players.fields.some(f => f.name === field)) player[field] = resolve(text);
  }
  if (edited) plan.insert(edited, { ...emptyRecord(edited), playerid: player.playerid!, firstname: names.firstName,
    surname: names.lastName, commonname: names.commonName, playerjerseyname: names.jerseyName });
}
