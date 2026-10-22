import type { EaFile, ReadTemplateOptions } from '../domain/models.js';
import type { TemplateDatabase } from '../domain/templates.js';
import type { Fc25File, Fc25ReadTemplateOptions } from '../domain/fc25/schema.js';
import { resolveTemplateFiles } from '../infrastructure/templates/template-files.js';
import { readEaFile } from './read-ea-file.js';

export function readTemplateDatabase<D extends TemplateDatabase = 'main'>(options: Fc25ReadTemplateOptions<D>): Promise<Fc25File<D>>;
export function readTemplateDatabase(options: ReadTemplateOptions): Promise<EaFile>;
export async function readTemplateDatabase(options: ReadTemplateOptions): Promise<EaFile> {
  const { databasePath } = resolveTemplateFiles(options.version, options.database);
  return readEaFile(databasePath, options);
}
