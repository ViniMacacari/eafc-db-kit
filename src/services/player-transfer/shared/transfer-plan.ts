import { EaFileError } from '../../../domain/errors.js';
import type { EaRecord, EaTable } from '../../../domain/models.js';
import type { TransferTableChange } from '../../../domain/transfer-models.js';

export function transferFailure(message: string): never {
  throw new EaFileError('INVALID_TRANSFER', message);
}

export function integerField(table: EaTable, name: string, value: number): void {
  const field = table.fields.find(field => field.name === name);
  if (!field || field.type !== 'integer' || field.rangeLow === null) {
    throw new EaFileError('UNSUPPORTED_OPERATION', `A mapped integer field is required: ${table.name}.${name}.`);
  }
  const minimum = field.rangeLow;
  const maximum = Math.min(field.rangeHigh ?? 2147483647, minimum + 2 ** field.depth - 1, 2147483647);
  if (!Number.isSafeInteger(value) || value < minimum || value > maximum) {
    transferFailure(`Value ${value} does not fit ${table.name}.${name}.`);
  }
}

export class TransferPlan {
  private readonly edits = new Map<EaRecord, { table: EaTable; values: EaRecord }>();
  private readonly removals = new Map<EaTable, Set<EaRecord>>();

  row(table: EaTable, original: EaRecord): EaRecord {
    let edit = this.edits.get(original);
    if (!edit) {
      edit = { table, values: { ...original } };
      this.edits.set(original, edit);
    }
    return edit.values;
  }

  set(table: EaTable, original: EaRecord, name: string, value: number): void {
    if (!Object.hasOwn(original, name)) transferFailure(`Record is missing ${table.name}.${name}.`);
    integerField(table, name, value);
    this.row(table, original)[name] = value;
  }

  remove(table: EaTable, original: EaRecord): void {
    let rows = this.removals.get(table);
    if (!rows) {
      rows = new Set();
      this.removals.set(table, rows);
    }
    rows.add(original);
  }

  commit(): readonly TransferTableChange[] {
    const assignments: { row: EaRecord; name: string; value: EaRecord[string]; table: EaTable }[] = [];
    const counts = new Map<EaTable, { updated: Set<EaRecord>; removed: number }>();
    for (const [row, edit] of this.edits) {
      if (this.removals.get(edit.table)?.has(row)) continue;
      for (const [name, value] of Object.entries(edit.values)) {
        if (Object.is(row[name], value)) continue;
        const descriptor = Object.getOwnPropertyDescriptor(row, name);
        if (!descriptor || !('value' in descriptor) || !descriptor.writable) {
          transferFailure(`Transfer records must be writable: ${edit.table.name}.${name}.`);
        }
        if (typeof value !== 'number') transferFailure('Transfer updates must contain integer values.');
        integerField(edit.table, name, value);
        assignments.push({ row, name, value, table: edit.table });
      }
    }
    const replacements: { table: EaTable; records: EaRecord[] }[] = [];
    for (const [table, removed] of this.removals) {
      const descriptor = Object.getOwnPropertyDescriptor(table, 'records');
      if (!descriptor || !('value' in descriptor) || !descriptor.writable) {
        transferFailure(`Transfer table records must be writable: ${table.name}.`);
      }
      replacements.push({ table, records: table.records.filter(row => !removed.has(row)) });
      counts.set(table, { updated: new Set(), removed: removed.size });
    }
    for (const { row, name, value, table } of assignments) {
      row[name] = value!;
      let count = counts.get(table);
      if (!count) { count = { updated: new Set(), removed: 0 }; counts.set(table, count); }
      count.updated.add(row);
    }
    for (const { table, records } of replacements) (table as { records: readonly EaRecord[] }).records = records;
    return [...counts].map(([table, count]) => ({ name: table.name, updatedRecords: count.updated.size, removedRecords: count.removed }));
  }
}
