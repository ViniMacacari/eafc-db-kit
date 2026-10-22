import { EaFileError } from '../../../domain/errors.js';
import type { EaField, EaRecord, EaTable, RecordValue } from '../../../domain/models.js';
import type { PlayerCreationTableChange } from '../../../domain/player-creation-models.js';

export function creationFailure(message: string): never {
  throw new EaFileError('INVALID_PLAYER_CREATION', message);
}

export function integerRange(field: EaField): readonly [number, number] {
  if (field.type !== 'integer' || field.rangeLow === null) {
    throw new EaFileError('UNSUPPORTED_OPERATION', `A mapped integer field is required: ${field.name}.`);
  }
  return [field.rangeLow, Math.min(field.rangeHigh ?? 2147483647, field.rangeLow + 2 ** field.depth - 1, 2147483647)];
}

export function validateValue(table: EaTable, field: EaField, value: RecordValue | undefined): void {
  if (field.type === 'integer') {
    const [min, max] = integerRange(field);
    if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < min || value > max) {
      creationFailure(`Value ${String(value)} does not fit ${table.name}.${field.name} (${min}..${max}).`);
    }
  } else if (field.type === 'float') {
    if (typeof value !== 'number' || !Number.isFinite(value) || !Number.isFinite(Math.fround(value))) {
      creationFailure(`A finite float32 is required: ${table.name}.${field.name}.`);
    }
  } else {
    if (typeof value !== 'string' || value.includes('\0') || new TextDecoder().decode(new TextEncoder().encode(value)) !== value) {
      creationFailure(`Valid text without null characters is required: ${table.name}.${field.name}.`);
    }
    const limit = field.type === 'string' ? field.depth / 8 : field.type === 'short-compressed-string' ? 255 : 65535;
    if (new TextEncoder().encode(value).length > limit) creationFailure(`Text exceeds ${table.name}.${field.name} (${limit} UTF-8 bytes).`);
  }
}

export function emptyRecord(table: EaTable): EaRecord {
  return Object.fromEntries(table.fields.map(field => [field.name, field.type === 'integer'
    ? Math.max(0, integerRange(field)[0]) : field.type === 'float' ? 0 : '']));
}

export class CreationPlan {
  private readonly edits = new Map<EaTable, { records: EaRecord[]; added: number; updated: number }>();

  records(table: EaTable): readonly EaRecord[] { return this.edits.get(table)?.records ?? table.records; }

  private edit(table: EaTable) {
    let edit = this.edits.get(table);
    if (!edit) { edit = { records: [...table.records], added: 0, updated: 0 }; this.edits.set(table, edit); }
    return edit;
  }

  insert(table: EaTable, values: EaRecord): void {
    this.validate(table, values);
    const edit = this.edit(table);
    if (edit.records.length >= 65535 || table.recordSize === 0) creationFailure(`No record space is supported in ${table.name}.`);
    edit.records.push(values);
    edit.added++;
  }

  update(table: EaTable, original: EaRecord, values: EaRecord): void {
    const edit = this.edit(table);
    const index = edit.records.indexOf(original);
    if (index < 0) creationFailure(`Cannot locate the source row in ${table.name}.`);
    const row = { ...original, ...values };
    this.validate(table, row);
    edit.records[index] = row;
    edit.updated++;
  }

  private validate(table: EaTable, row: EaRecord): void {
    if (Object.keys(row).length !== table.fields.length || Object.keys(row).some(name => !table.fields.some(f => f.name === name))) {
      creationFailure(`Records must contain exactly the mapped fields of ${table.name}.`);
    }
    for (const field of table.fields) validateValue(table, field, row[field.name]);
  }

  finish(apply: boolean): readonly PlayerCreationTableChange[] {
    for (const table of this.edits.keys()) {
      const descriptor = Object.getOwnPropertyDescriptor(table, 'records');
      if (!descriptor || !('value' in descriptor) || !descriptor.writable) creationFailure(`Table records must be writable: ${table.name}.`);
    }
    if (apply) for (const [table, edit] of this.edits) (table as { records: readonly EaRecord[] }).records = edit.records;
    return [...this.edits].map(([table, edit]) => ({ name: table.name, addedRecords: edit.added, updatedRecords: edit.updated }));
  }
}
