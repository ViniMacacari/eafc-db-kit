import { EaFileError } from '../../domain/errors.js';
import type { FifaDatabaseFile, FifaParseOptions } from '../../domain/fifa-models.js';
import { DecodeBudget, resolveLimits } from '../../domain/limits.js';
import type { EaWarning } from '../../domain/models.js';
import { parseDatabase } from '../../infrastructure/binary/database-parser.js';
import { fifaMetadata, inspectFifaDatabase } from '../../infrastructure/metadata/fifa-database-metadata.js';
import { fifaOptions } from './database-inputs.js';
import { withFileOperations } from '../file-operations/with-file-operations.js';

export function parseFifaDatabase(bytes: Uint8Array, xml: string, options: FifaParseOptions = {}): FifaDatabaseFile {
  fifaOptions(options, ['fileName', 'tables', 'limits']);
  if ((options.fileName !== undefined && typeof options.fileName !== 'string') ||
      (options.tables !== undefined && (!Array.isArray(options.tables) || options.tables.length === 0 ||
        options.tables.some(name => typeof name !== 'string' || name.length === 0)))) {
    throw new EaFileError('INVALID_OPTIONS', 'fileName must be a string; tables must be a nonempty array of table names.');
  }
  const limits = resolveLimits(options.limits);
  const metadata = fifaMetadata(xml, limits.maxFileBytes);
  inspectFifaDatabase(bytes, metadata, limits);
  const warnings: EaWarning[] = [];
  const database = parseDatabase(bytes, 0, 0, metadata, new DecodeBudget(limits), warnings,
    options.tables === undefined ? undefined : new Set(options.tables));
  return withFileOperations({ format: 'fifa-db' as const, formatVersion: 1 as const,
    source: { fileName: options.fileName ?? null, byteLength: bytes.length, kind: 'database' },
    container: 'database', inGameName: null, metadataComplete: true,
    databases: [database] as const, warnings }, 'fifa-db');
}
