import { loadTemplateMetadata, parseEaFile, readEaFile, readTemplateDatabase, writeEaFile,
  type EaFile, type ReadFileOptions, type TemplateDatabase, type EaFcVersion,
  type Fc25Record, type Fc25FieldName, type Fc25TableName, type Fc25TableShortName,
  type Fc25MainRecords, type Fc25FutRecords, type Fc25LocalizationRecords,
  type Fc25File, type Fc25Metadata, type Fc25ReadFileOptions, type Fc25ReadTemplateOptions } from '../../src/index.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

export type PlayerRecord = Assert<Equal<Fc25Record<'players'>, Fc25MainRecords['players']>>;
export type FutRecord = Assert<Equal<Fc25Record<'players', 'fut'>, Fc25FutRecords['players']>>;
export type LocalizationRecord = Assert<Equal<Fc25Record<'LanguageStrings1', 'localization'>,
  Fc25LocalizationRecords['LanguageStrings1']>>;
export type DateIsNumber = Assert<Equal<Fc25Record<'players'>['birthdate'], number>>;
export type StringIsString = Assert<Equal<Fc25Record<'teams'>['teamname'], string>>;
export type FlagIsNumber = Assert<Equal<Fc25Record<'players'>['gender'], number>>;
export type FloatMayBeNull = Assert<Equal<Fc25Record<'attributecategorymap'>['weight'], number | null>>;
export type NumericPlayerFieldRejectsString = Assert<Equal<string extends Fc25Record<'players'>['overallrating'] ? true : false, false>>;
export type UnknownPlayerFieldRejected = Assert<Equal<'overalrating' extends keyof Fc25Record<'players'> ? true : false, false>>;
export type PlayerDateRejectsDateObject = Assert<Equal<Extract<Fc25Record<'players'>['birthdate'], Date>, never>>;
export type TeamNameRejectsNumber = Assert<Equal<number extends Fc25Record<'teams'>['teamname'] ? true : false, false>>;
export type LocalizationRejectsPlayerId = Assert<Equal<'playerid' extends keyof Fc25LocalizationRecords['LanguageStrings1'] ? true : false, false>>;
export type MainRejectsLocalizationTables = Assert<Equal<'LanguageStrings1' extends Fc25TableName ? true : false, false>>;
export type FutOptionsRequireDatabase = Assert<Equal<{ version: 'FC 25' } extends Fc25ReadFileOptions<'fut'> ? true : false, false>>;
export type LocalizationOptionsRequireDatabase = Assert<Equal<{ version: 'FC 25' } extends Fc25ReadTemplateOptions<'localization'> ? true : false, false>>;
export type UnknownTableRejected = Assert<Equal<'playres' extends Fc25TableName ? true : false, false>>;
export type UnknownFieldRejected = Assert<Equal<'overalrating' extends Fc25FieldName<'players'> ? true : false, false>>;
export type FutReaderRequiresDatabase = Assert<Equal<{ version: 'FC 25' } extends Parameters<typeof readEaFile<'fut'>>[1] ? true : false, false>>;
export type FutMetadataRequiresDatabase = Assert<Equal<['FC 25'] extends Parameters<typeof loadTemplateMetadata<'fut'>> ? true : false, false>>;

export async function inferredReads(path: string) {
  const file = await readEaFile(path, { version: 'FC 25', tables: ['players', 'teams'] });
  const players = file.databases[0]?.tables.find(table => table.name === 'players');
  const teams = file.databases[0]?.tables.find(table => table.name === 'teams');
  const player = players?.records[0];
  if (player) {
    const id: number = player.playerid;
    const birthdate: number = player.birthdate;
    player.overallrating = 90;
    void [id, birthdate];
  }
  if (teams?.records[0]) {
    const name: string = teams.records[0].teamname;
    void name;
  }
  const generic: EaFile = file;
  const inferredMain: Assert<Equal<typeof file, Fc25File<'main'>>> = true;
  const teamsByCode = file.databases.flatMap(db => db.tables).find(table => table.shortName === 'lyxL');
  const nameByCode: string | undefined = teamsByCode?.records[0]?.teamname;
  await writeEaFile(path, 'output.squad', file);
  return { generic, inferredMain, nameByCode };
}

export async function templateReads() {
  const main = await readTemplateDatabase({ version: 'FC 25' });
  const fut = await readTemplateDatabase({ version: 'FC 25', database: 'fut' });
  const loc = await readTemplateDatabase({ version: 'FC 25', database: 'localization' });
  const inferredFut: Assert<Equal<typeof fut, Fc25File<'fut'>>> = true;
  const inferredLocalization: Assert<Equal<typeof loc, Fc25File<'localization'>>> = true;
  const first = loc.databases[0]?.tables.find(table => table.name === 'LanguageStrings1')?.records[0];
  if (first) {
    const text: string = first.sourcetext;
    const hash: number = first.hashid;
    void [text, hash];
  }
  const metadata = await loadTemplateMetadata('FC 25', 'localization');
  const table = metadata.tables.find(item => item.name === 'LanguageStrings1');
  const field: 'hashid' | 'sourcetext' | 'stringid' | undefined = table?.fields[0]?.name;
  return { main, fut, loc, field, inferredFut, inferredLocalization };
}

export async function broadReads(path: string, version: EaFcVersion, database: TemplateDatabase) {
  const unknownVersion = await readEaFile(path, { version });
  const fc26 = await readTemplateDatabase({ version: 'FC 26', tables: ['teams'] });
  const genericOptions: ReadFileOptions = { version: 'FC 25' };
  const generic = await readEaFile(path, genericOptions);
  const raw = parseEaFile(new Uint8Array());
  const custom = await readEaFile(path, { metadata: { tables: [] } });
  const unknownDb = await readTemplateDatabase({ version: 'FC 25', database });
  const inferredUnknownDb: Assert<Equal<typeof unknownDb, Fc25File<TemplateDatabase>>> = true;
  const fc26IsGeneric: Assert<Equal<typeof fc26, EaFile>> = true;
  const unknownVersionIsGeneric: Assert<Equal<typeof unknownVersion, EaFile>> = true;
  const genericOptionsStayGeneric: Assert<Equal<typeof generic, EaFile>> = true;
  const main = await readTemplateDatabase({ version: 'FC 25', tables: ['unknown-table-filter'] });
  const options = { version: 'FC 25', tables: ['players'] } satisfies Fc25ReadFileOptions;
  const templateOptions = { version: 'FC 25', database: 'fut', tables: ['players'] } satisfies Fc25ReadTemplateOptions<'fut'>;
  return { unknownVersion, fc26, generic, raw, custom, unknownDb, inferredUnknownDb, fc26IsGeneric,
    unknownVersionIsGeneric, genericOptionsStayGeneric, main, options, templateOptions };
}

export const tableName: Fc25TableName = 'players';
export const fieldName: Fc25FieldName<'players'> = 'playerid';
export const shortName: Fc25TableShortName = 'CZUM';

export async function optionalDatabases(database: 'fut' | undefined) {
  const metadata = await loadTemplateMetadata('FC 25', database);
  const optionalDbIsUnion: Assert<Equal<typeof metadata, Fc25Metadata<'main' | 'fut'>>> = true;
  const mainMetadata = await loadTemplateMetadata('FC 25', undefined);
  const defaultDbIsMain: Assert<Equal<typeof mainMetadata, Fc25Metadata<'main'>>> = true;
  return { metadata, optionalDbIsUnion, mainMetadata, defaultDbIsMain };
}
