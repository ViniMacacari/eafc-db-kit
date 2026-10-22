import { DEFAULT_LIMITS, resolveLimits } from '../domain/limits.js';
import type { MetadataSchema } from '../domain/models.js';
import type { EaFcVersion, TemplateDatabase } from '../domain/templates.js';
import type { Fc25Metadata } from '../domain/fc25/schema.js';
import type { Fc26Metadata } from '../domain/fc26/schema.js';
import type { Fc27Metadata } from '../domain/fc27/schema.js';
import { readOnlyFile } from '../infrastructure/filesystem/read-only-file.js';
import { parseMetadataXml } from '../infrastructure/metadata/xml-metadata.js';
import { resolveTemplateFiles } from '../infrastructure/templates/template-files.js';

export function loadTemplateMetadata(version: 'FC 25', database?: undefined,
  maxFileBytes?: number): Promise<Fc25Metadata<'main'>>;
export function loadTemplateMetadata<D extends TemplateDatabase | undefined>(version: 'FC 25', database: D,
  maxFileBytes?: number): Promise<Fc25Metadata<D extends TemplateDatabase ? D : 'main'>>;
export function loadTemplateMetadata(version: 'FC 26', database?: undefined,
  maxFileBytes?: number): Promise<Fc26Metadata<'main'>>;
export function loadTemplateMetadata<D extends TemplateDatabase | undefined>(version: 'FC 26', database: D,
  maxFileBytes?: number): Promise<Fc26Metadata<D extends TemplateDatabase ? D : 'main'>>;
export function loadTemplateMetadata(version: 'FC 27', database?: undefined,
  maxFileBytes?: number): Promise<Fc27Metadata<'main'>>;
export function loadTemplateMetadata<D extends TemplateDatabase | undefined>(version: 'FC 27', database: D,
  maxFileBytes?: number): Promise<Fc27Metadata<D extends TemplateDatabase ? D : 'main'>>;
export function loadTemplateMetadata(version: EaFcVersion, database?: TemplateDatabase,
  maxFileBytes?: number): Promise<MetadataSchema>;
export async function loadTemplateMetadata(version: EaFcVersion, database: TemplateDatabase = 'main',
  maxFileBytes: number = DEFAULT_LIMITS.maxFileBytes): Promise<MetadataSchema> {
  const { xmlPath } = resolveTemplateFiles(version, database);
  const limits = resolveLimits({ maxFileBytes });
  const bytes = await readOnlyFile(xmlPath, limits.maxFileBytes);
  return parseMetadataXml(new TextDecoder('utf-8').decode(bytes));
}
