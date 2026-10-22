import { loadTemplateMetadata, parseEaFile, readEaFile, readTemplateDatabase, writeEaFile,
  type EaFile, type ReadFileOptions, type TemplateDatabase, type EaFcVersion,
  type Fc26Record, type Fc26FieldName, type Fc26TableName, type Fc26TableShortName,
  type Fc26MainRecords, type Fc26FutRecords, type Fc26LocalizationRecords,
  type Fc26File, type Fc26Metadata, type Fc26ReadFileOptions, type Fc26ReadTemplateOptions,
  type Fc25FieldName, type Fc25TableName } from '../../src/index.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

export type PlayerRecord = Assert<Equal<Fc26Record<'players'>, Fc26MainRecords['players']>>;
export type FutRecord = Assert<Equal<Fc26Record<'players', 'fut'>, Fc26FutRecords['players']>>;
export type LocalizationRecord = Assert<Equal<Fc26Record<'LanguageStrings1', 'localization'>,
  Fc26LocalizationRecords['LanguageStrings1']>>;
export type DateIsNumber = Assert<Equal<Fc26Record<'players'>['birthdate'], number>>;
export type StringIsString = Assert<Equal<Fc26Record<'teams'>['teamname'], string>>;
export type FlagIsNumber = Assert<Equal<Fc26Record<'players'>['gender'], number>>;
export type FloatMayBeNull = Assert<Equal<Fc26Record<'attributecategorymap'>['weight'], number | null>>;
export type NewPositionIsNumber = Assert<Equal<Fc26Record<'players'>['preferredposition7'], number>>;
export type FutNewPositionIsNumber = Assert<Equal<Fc26Record<'players', 'fut'>['preferredposition7'], number>>;
export type NewFieldIsVersionSpecific = Assert<Equal<'preferredposition7' extends Fc25FieldName<'players'> ? true : false, false>>;
export type NewTableIsVersionSpecific = Assert<Equal<'archetypes' extends Fc25TableName ? true : false, false>>;
export type ArchetypesInFc26 = Assert<Equal<'archetypes' extends Fc26TableName ? true : false, true>>;
export type NumericPlayerFieldRejectsString = Assert<Equal<string extends Fc26Record<'players'>['overallrating'] ? true : false, false>>;
export type UnknownPlayerFieldRejected = Assert<Equal<'overalrating' extends keyof Fc26Record<'players'> ? true : false, false>>;
export type PlayerDateRejectsDateObject = Assert<Equal<Extract<Fc26Record<'players'>['birthdate'], Date>, never>>;
export type TeamNameRejectsNumber = Assert<Equal<number extends Fc26Record<'teams'>['teamname'] ? true : false, false>>;
export type LocalizationRejectsPlayerId = Assert<Equal<'playerid' extends keyof Fc26LocalizationRecords['LanguageStrings1'] ? true : false, false>>;
export type MainRejectsLocalizationTables = Assert<Equal<'LanguageStrings1' extends Fc26TableName ? true : false, false>>;
export type FutOptionsRequireDatabase = Assert<Equal<{ version: 'FC 26' } extends Fc26ReadFileOptions<'fut'> ? true : false, false>>;
export type LocalizationOptionsRequireDatabase = Assert<Equal<{ version: 'FC 26' } extends Fc26ReadTemplateOptions<'localization'> ? true : false, false>>;
export type UnknownTableRejected = Assert<Equal<'playres' extends Fc26TableName ? true : false, false>>;
export type UnknownFieldRejected = Assert<Equal<'overalrating' extends Fc26FieldName<'players'> ? true : false, false>>;
export type FutReaderRequiresDatabase = Assert<Equal<{ version: 'FC 26' } extends Parameters<typeof readEaFile<'fut'>>[1] ? true : false, false>>;
export type FutMetadataRequiresDatabase = Assert<Equal<['FC 26'] extends Parameters<typeof loadTemplateMetadata<'fut'>> ? true : false, false>>;

export async function inferredReads(path: string) {
  const file = await readEaFile(path, { version: 'FC 26', tables: ['players', 'teams'] });
  const players = file.databases[0]?.tables.find(table => table.name === 'players');
  const teams = file.databases[0]?.tables.find(table => table.name === 'teams');
  const player = players?.records[0];
  if (player) {
    const id: number = player.playerid;
    const birthdate: number = player.birthdate;
    const preferredPosition: number = player.preferredposition7;
    const role: number = player.role5;
    player.overallrating = 90;
    void [id, birthdate, preferredPosition, role];
  }
  if (teams?.records[0]) {
    const name: string = teams.records[0].teamname;
    void name;
  }
  const generic: EaFile = file;
  const inferredMain: Assert<Equal<typeof file, Fc26File<'main'>>> = true;
  const teamsByCode = file.databases.flatMap(db => db.tables).find(table => table.shortName === 'lyxL');
  const nameByCode: string | undefined = teamsByCode?.records[0]?.teamname;
  await writeEaFile(path, 'output.squad', file);
  return { generic, inferredMain, nameByCode };
}

export async function templateReads() {
  const main = await readTemplateDatabase({ version: 'FC 26' });
  const fut = await readTemplateDatabase({ version: 'FC 26', database: 'fut' });
  const loc = await readTemplateDatabase({ version: 'FC 26', database: 'localization' });
  const inferredFut: Assert<Equal<typeof fut, Fc26File<'fut'>>> = true;
  const inferredLocalization: Assert<Equal<typeof loc, Fc26File<'localization'>>> = true;
  const first = loc.databases[0]?.tables.find(table => table.name === 'LanguageStrings1')?.records[0];
  if (first) {
    const text: string = first.sourcetext;
    const hash: number = first.hashid;
    void [text, hash];
  }
  const metadata = await loadTemplateMetadata('FC 26', 'localization');
  const table = metadata.tables.find(item => item.name === 'LanguageStrings1');
  const field: 'hashid' | 'sourcetext' | 'stringid' | undefined = table?.fields[0]?.name;
  return { main, fut, loc, field, inferredFut, inferredLocalization };
}

export async function broadReads(path: string, version: EaFcVersion, database: TemplateDatabase) {
  const unknownVersion = await readEaFile(path, { version });
  const fc26 = await readTemplateDatabase({ version: 'FC 26', tables: ['teams'] });
  const genericOptions: ReadFileOptions = { version: 'FC 26' };
  const generic = await readEaFile(path, genericOptions);
  const raw = parseEaFile(new Uint8Array());
  const custom = await readEaFile(path, { metadata: { tables: [] } });
  const unknownDb = await readTemplateDatabase({ version: 'FC 26', database });
  const inferredUnknownDb: Assert<Equal<typeof unknownDb, Fc26File<TemplateDatabase>>> = true;
  const fc26IsTyped: Assert<Equal<typeof fc26, Fc26File<'main'>>> = true;
  const unknownVersionIsGeneric: Assert<Equal<typeof unknownVersion, EaFile>> = true;
  const genericOptionsStayGeneric: Assert<Equal<typeof generic, EaFile>> = true;
  const main = await readTemplateDatabase({ version: 'FC 26', tables: ['unknown-table-filter'] });
  const options = { version: 'FC 26', tables: ['players'] } satisfies Fc26ReadFileOptions;
  const templateOptions = { version: 'FC 26', database: 'fut', tables: ['players'] } satisfies Fc26ReadTemplateOptions<'fut'>;
  return { unknownVersion, fc26, generic, raw, custom, unknownDb, inferredUnknownDb, fc26IsTyped,
    unknownVersionIsGeneric, genericOptionsStayGeneric, main, options, templateOptions };
}

export const tableName: Fc26TableName = 'players';
export const fieldName: Fc26FieldName<'players'> = 'playerid';
export const shortName: Fc26TableShortName = 'CZUM';

export async function optionalDatabases(database: 'fut' | undefined) {
  const metadata = await loadTemplateMetadata('FC 26', database);
  const optionalDbIsUnion: Assert<Equal<typeof metadata, Fc26Metadata<'main' | 'fut'>>> = true;
  const mainMetadata = await loadTemplateMetadata('FC 26', undefined);
  const defaultDbIsMain: Assert<Equal<typeof mainMetadata, Fc26Metadata<'main'>>> = true;
  return { metadata, optionalDbIsUnion, mainMetadata, defaultDbIsMain };
}
