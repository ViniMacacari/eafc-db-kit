import { EaFileError } from '../../../domain/errors.js';
import type { EaField, EaTable, RecordValue } from '../../../domain/models.js';
import { RecordCreationPlan, validateValue as validateMappedValue } from '../../shared/record-creation-plan.js';

export { emptyRecord, integerRange } from '../../shared/record-creation-plan.js';

export function creationFailure(message: string): never {
  throw new EaFileError('INVALID_PLAYER_CREATION', message);
}

export function validateValue(table: EaTable, field: EaField, value: RecordValue | undefined): void {
  validateMappedValue(table, field, value, creationFailure);
}

export class CreationPlan extends RecordCreationPlan {
  constructor() { super('INVALID_PLAYER_CREATION'); }
}
