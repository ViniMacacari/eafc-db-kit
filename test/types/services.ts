import { EaFcFileService, FifaDatabaseService, eaFcFileService, fifaDatabaseService,
  readFifaDatabase, writeFifaDatabase, type EaFile, type Fc27File, type Fc26File,
  type FifaDatabaseFile, type FifaParseOptions, type FifaReadOptions, type FifaSerializeOptions,
  type FifaWriteOptions, type WriteFileResult } from '../../src/index.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

export type FifaReadRequiresXml = Assert<Equal<Parameters<typeof readFifaDatabase>[1], string>>;
export type FifaWriteRequiresXml = Assert<Equal<Parameters<typeof writeFifaDatabase>[1], string>>;
export type FifaRejectsVersion = Assert<Equal<'version' extends keyof FifaReadOptions ? true : false, false>>;
export type FifaRejectsSaveKind = Assert<Equal<'kind' extends keyof FifaParseOptions ? true : false, false>>;
export type FifaRejectsSaveIntegrity = Assert<Equal<'saveIntegrity' extends keyof FifaSerializeOptions ? true : false, false>>;
export type FifaRejectsGenericEaSnapshot = Assert<Equal<EaFile extends FifaDatabaseFile ? true : false, false>>;
export type FifaWriteOption = Assert<Equal<FifaWriteOptions['overwrite'], boolean | undefined>>;

export async function serviceTypes(dbPath: string, xmlPath: string, output: string, bytes: Uint8Array, xml: string) {
  const service = new FifaDatabaseService();
  const parsed = service.parse(bytes, xml);
  const read = await service.read(dbPath, xmlPath, { tables: ['players'] });
  const isFifa: Assert<Equal<typeof read, FifaDatabaseFile>> = true;
  const kind: 'database' = read.source.kind;
  const tag: 'fifa-db' = parsed.format;
  const row = read.databases[0].tables[0]?.records[0];
  if (row) row['overallrating'] = 90;
  const binary: Uint8Array = service.serialize(bytes, xml, parsed);
  const result: WriteFileResult = await service.write(dbPath, xmlPath, output, read);
  const main = await eaFcFileService.read(dbPath, { version: 'FC 27', tables: ['players'] });
  const typedMain: Assert<Equal<typeof main, Fc27File<'main'>>> = true;
  const fut = await new EaFcFileService().readTemplate({ version: 'FC 26', database: 'fut' });
  const typedFut: Assert<Equal<typeof fut, Fc26File<'fut'>>> = true;
  const metadata = await eaFcFileService.loadMetadata('FC 27', 'localization');
  const field = metadata.tables.find(table => table.name === 'LanguageStrings1')?.fields[0]?.name;
  const fieldName: 'hashid' | 'sourcetext' | 'stringid' | undefined = field;
  const standalone: FifaDatabaseFile = await fifaDatabaseService.read(dbPath, xmlPath);
  return { isFifa, kind, tag, binary, result, typedMain, typedFut, fieldName, standalone };
}
