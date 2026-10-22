import type { EaTable } from '../../../domain/models.js';
import { TransferPlan, transferFailure } from './transfer-plan.js';

const sheetNames: Readonly<Record<string, string>> = {
  default_mentalities: 'default_teamsheets',
  cm_default_mentalities: 'default_teamsheets',
  mentalities: 'teamsheets',
  cm_mentalities: 'cm_teamsheets',
};

export function updateTeamMentalities(plan: TransferPlan, tables: ReadonlyMap<string, EaTable>,
  playerId: number, sourceTeamId: number, remaining: readonly number[], positions: ReadonlyMap<number, number>): void {
  for (const [name, sheetName] of Object.entries(sheetNames)) {
    const table = tables.get(name);
    if (!table) continue;
    const slots = table.fields.map(field => field.name).filter(name => /^playerid\d+$/.test(name));
    for (const original of table.records) {
      if (original.teamid !== sourceTeamId || !slots.some(slot => original[slot] === playerId)) continue;
      const sheetTable = tables.get(sheetName);
      const sheets = sheetTable?.records.filter(row => row.teamid === sourceTeamId &&
        ['teamsheetid', 'profileid'].every(key => !Object.hasOwn(original, key) || !Object.hasOwn(row, key) || original[key] === row[key])) ?? [];
      if (sheets.length > 1) transferFailure(`Ambiguous source team sheet for ${name}.`);
      const sheet = sheets[0];
      const preferred = sheet && sheetTable ? Object.keys(sheet).filter(key => /^playerid\d+$/.test(key) && sheet[key] === playerId)
        .map(key => plan.row(sheetTable, sheet)[key]).filter((id): id is number => typeof id === 'number') : [];
      const row = plan.row(table, original);
      for (const slot of slots) {
        if (row[slot] !== playerId) continue;
        const used = new Set(slots.map(key => row[key]));
        const eligible = (id: number): boolean => !used.has(id) && remaining.includes(id) &&
          (positions.get(id) === 0) === (Number(slot.slice(8)) === 0);
        const replacement = preferred.find(eligible) ?? remaining.find(id => eligible(id) && positions.get(id) === positions.get(playerId)) ??
          remaining.find(eligible);
        if (replacement === undefined) transferFailure(`The source team has no tactical replacement for ${name}.${slot}.`);
        plan.set(table, original, slot, replacement);
      }
    }
  }
}
