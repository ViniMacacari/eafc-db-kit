import { basename } from 'node:path';
import { EaFileError } from '../domain/errors.js';
import { resolveLimits } from '../domain/limits.js';
import type { EaFile, ReadFileOptions } from '../domain/models.js';
import type { TemplateDatabase } from '../domain/templates.js';
import type { Fc25File, Fc25ReadFileOptions } from '../domain/fc25/schema.js';
import type { Fc26File, Fc26ReadFileOptions } from '../domain/fc26/schema.js';
import { readOnlyFile } from '../infrastructure/filesystem/read-only-file.js';
import { resolveTemplateFiles } from '../infrastructure/templates/template-files.js';
import { loadTemplateMetadata } from './load-template-metadata.js';
import { parseEaFile } from './parse-ea-file.js';

export function readEaFile<D extends TemplateDatabase = 'main'>(path: string, options: Fc25ReadFileOptions<D>): Promise<Fc25File<D>>;
export function readEaFile<D extends TemplateDatabase = 'main'>(path: string, options: Fc26ReadFileOptions<D>): Promise<Fc26File<D>>;
export function readEaFile(path: string, options?: ReadFileOptions): Promise<EaFile>;
export async function readEaFile(path: string, options: ReadFileOptions = {}): Promise<EaFile> {
  if ('metadataPath' in options) {
    throw new EaFileError('INVALID_OPTIONS', 'metadataPath is not supported; select templates using version.');
  }
  if (options.version !== undefined && options.metadata !== undefined) {
    throw new EaFileError('INVALID_OPTIONS', 'Use either version or metadata, not both.');
  }
  if (options.database !== undefined && options.version === undefined) {
    throw new EaFileError('INVALID_OPTIONS', 'database requires version.');
  }
  if (options.version !== undefined) resolveTemplateFiles(options.version, options.database);
  const limits = resolveLimits(options.limits);
  const [bytes, metadata] = await Promise.all([
    readOnlyFile(path, limits.maxFileBytes),
    options.version === undefined ? options.metadata : loadTemplateMetadata(options.version, options.database, limits.maxFileBytes),
  ]);
  return parseEaFile(bytes, { ...options, fileName: options.fileName ?? basename(path), ...(metadata === undefined ? {} : { metadata }) });
}
