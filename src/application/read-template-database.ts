import type { EaFile, ReadTemplateOptions } from '../domain/models.js';
import type { TemplateDatabase } from '../domain/templates.js';
import type { Fc25File, Fc25ReadTemplateOptions } from '../domain/fc25/schema.js';
import type { Fc26File, Fc26ReadTemplateOptions } from '../domain/fc26/schema.js';
import type { Fc27File, Fc27ReadTemplateOptions } from '../domain/fc27/schema.js';
import { resolveTemplateFiles } from '../infrastructure/templates/template-files.js';
import { readEaFile } from './read-ea-file.js';

export function readTemplateDatabase<D extends TemplateDatabase = 'main'>(options: Fc25ReadTemplateOptions<D>): Promise<Fc25File<D>>;
export function readTemplateDatabase<D extends TemplateDatabase = 'main'>(options: Fc26ReadTemplateOptions<D>): Promise<Fc26File<D>>;
export function readTemplateDatabase<D extends TemplateDatabase = 'main'>(options: Fc27ReadTemplateOptions<D>): Promise<Fc27File<D>>;
export function readTemplateDatabase(options: ReadTemplateOptions): Promise<EaFile>;
export async function readTemplateDatabase(options: ReadTemplateOptions): Promise<EaFile> {
  const { databasePath } = resolveTemplateFiles(options.version, options.database);
  return readEaFile(databasePath, options);
}
