import { loadTemplateMetadata, parseEaFile, readEaFile, readTemplateDatabase, writeEaFile,
  type EaFile, type ReadFileOptions, type TemplateDatabase, type EaFcVersion,
  type Fc27Record, type Fc27FieldName, type Fc27TableName, type Fc27TableShortName,
  type Fc27MainRecords, type Fc27FutRecords, type Fc27LocalizationRecords,
  type Fc27File, type Fc27Metadata, type Fc27ReadFileOptions, type Fc27ReadTemplateOptions,
  type Fc26FieldName, type Fc26TableName } from '../../src/index.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

export type PlayerRecord = Assert<Equal<Fc27Record<'players'>, Fc27MainRecords['players']>>;
export type FutRecord = Assert<Equal<Fc27Record<'players', 'fut'>, Fc27FutRecords['players']>>;
export type LocalizationRecord = Assert<Equal<Fc27Record<'LanguageStrings1', 'localization'>,
  Fc27LocalizationRecords['LanguageStrings1']>>;
export type DateIsNumber = Assert<Equal<Fc27Record<'players'>['birthdate'], number>>;
export type StringIsString = Assert<Equal<Fc27Record<'teams'>['teamname'], string>>;
export type FlagIsNumber = Assert<Equal<Fc27Record<'players'>['gender'], number>>;
export type FloatMayBeNull = Assert<Equal<Fc27Record<'attributecategorymap'>['weight'], number | null>>;
export type NewRoleIsNumber = Assert<Equal<Fc27Record<'players'>['role9'], number>>;
export type FutNewRoleIsNumber = Assert<Equal<Fc27Record<'players', 'fut'>['role9'], number>>;
export type NewFieldIsVersionSpecific = Assert<Equal<'role9' extends Fc26FieldName<'players'> ? true : false, false>>;
export type NewTableIsVersionSpecific = Assert<Equal<'vipplayers' extends Fc26TableName ? true : false, false>>;
export type VipPlayersInFc27 = Assert<Equal<'vipplayers' extends Fc27TableName ? true : false, true>>;
export type NumericPlayerFieldRejectsString = Assert<Equal<string extends Fc27Record<'players'>['overallrating'] ? true : false, false>>;
export type UnknownPlayerFieldRejected = Assert<Equal<'overalrating' extends keyof Fc27Record<'players'> ? true : false, false>>;
export type PlayerDateRejectsDateObject = Assert<Equal<Extract<Fc27Record<'players'>['birthdate'], Date>, never>>;
export type TeamNameRejectsNumber = Assert<Equal<number extends Fc27Record<'teams'>['teamname'] ? true : false, false>>;
export type LocalizationRejectsPlayerId = Assert<Equal<'playerid' extends keyof Fc27LocalizationRecords['LanguageStrings1'] ? true : false, false>>;
export type MainRejectsLocalizationTables = Assert<Equal<'LanguageStrings1' extends Fc27TableName ? true : false, false>>;
export type FutOptionsRequireDatabase = Assert<Equal<{ version: 'FC 27' } extends Fc27ReadFileOptions<'fut'> ? true : false, false>>;
export type LocalizationOptionsRequireDatabase = Assert<Equal<{ version: 'FC 27' } extends Fc27ReadTemplateOptions<'localization'> ? true : false, false>>;
export type UnknownTableRejected = Assert<Equal<'playres' extends Fc27TableName ? true : false, false>>;
export type UnknownFieldRejected = Assert<Equal<'overalrating' extends Fc27FieldName<'players'> ? true : false, false>>;
export type FutReaderRequiresDatabase = Assert<Equal<{ version: 'FC 27' } extends Parameters<typeof readEaFile<'fut'>>[1] ? true : false, false>>;
export type FutMetadataRequiresDatabase = Assert<Equal<['FC 27'] extends Parameters<typeof loadTemplateMetadata<'fut'>> ? true : false, false>>;

export async function inferredReads(path: string) {
  const file = await readEaFile(path, { version: 'FC 27', tables: ['players', 'teams'] });
  const players = file.databases[0]?.tables.find(table => table.name === 'players');
  const teams = file.databases[0]?.tables.find(table => table.name === 'teams');
  const player = players?.records[0];
  if (player) {
    const id: number = player.playerid;
    const birthdate: number = player.birthdate;
    const roleNine: number = player.role9;
    const role: number = player.role5;
    player.overallrating = 90;
    void [id, birthdate, roleNine, role];
  }
  if (teams?.records[0]) {
    const name: string = teams.records[0].teamname;
    void name;
  }
  const generic: EaFile = file;
  const inferredMain: Assert<Equal<typeof file, Fc27File<'main'>>> = true;
  const teamsByCode = file.databases.flatMap(db => db.tables).find(table => table.shortName === 'lyxL');
  const nameByCode: string | undefined = teamsByCode?.records[0]?.teamname;
  await writeEaFile(path, 'output.squad', file);
  return { generic, inferredMain, nameByCode };
}

export async function templateReads() {
  const main = await readTemplateDatabase({ version: 'FC 27' });
  const fut = await readTemplateDatabase({ version: 'FC 27', database: 'fut' });
  const loc = await readTemplateDatabase({ version: 'FC 27', database: 'localization' });
  const inferredFut: Assert<Equal<typeof fut, Fc27File<'fut'>>> = true;
  const inferredLocalization: Assert<Equal<typeof loc, Fc27File<'localization'>>> = true;
  const first = loc.databases[0]?.tables.find(table => table.name === 'LanguageStrings1')?.records[0];
  if (first) {
    const text: string = first.sourcetext;
    const hash: number = first.hashid;
    void [text, hash];
  }
  const metadata = await loadTemplateMetadata('FC 27', 'localization');
  const table = metadata.tables.find(item => item.name === 'LanguageStrings1');
  const field: 'hashid' | 'sourcetext' | 'stringid' | undefined = table?.fields[0]?.name;
  return { main, fut, loc, field, inferredFut, inferredLocalization };
}

export async function broadReads(path: string, version: EaFcVersion, database: TemplateDatabase) {
  const unknownVersion = await readEaFile(path, { version });
  const fc27 = await readTemplateDatabase({ version: 'FC 27', tables: ['teams'] });
  const genericOptions: ReadFileOptions = { version: 'FC 27' };
  const generic = await readEaFile(path, genericOptions);
  const raw = parseEaFile(new Uint8Array());
  const custom = await readEaFile(path, { metadata: { tables: [] } });
  const unknownDb = await readTemplateDatabase({ version: 'FC 27', database });
  const inferredUnknownDb: Assert<Equal<typeof unknownDb, Fc27File<TemplateDatabase>>> = true;
  const fc27IsTyped: Assert<Equal<typeof fc27, Fc27File<'main'>>> = true;
  const unknownVersionIsGeneric: Assert<Equal<typeof unknownVersion, EaFile>> = true;
  const genericOptionsStayGeneric: Assert<Equal<typeof generic, EaFile>> = true;
  const main = await readTemplateDatabase({ version: 'FC 27', tables: ['unknown-table-filter'] });
  const options = { version: 'FC 27', tables: ['players'] } satisfies Fc27ReadFileOptions;
  const templateOptions = { version: 'FC 27', database: 'fut', tables: ['players'] } satisfies Fc27ReadTemplateOptions<'fut'>;
  return { unknownVersion, fc27, generic, raw, custom, unknownDb, inferredUnknownDb, fc27IsTyped,
    unknownVersionIsGeneric, genericOptionsStayGeneric, main, options, templateOptions };
}

export const tableName: Fc27TableName = 'players';
export const fieldName: Fc27FieldName<'players'> = 'playerid';
export const shortName: Fc27TableShortName = 'CZUM';

export async function optionalDatabases(database: 'fut' | undefined) {
  const metadata = await loadTemplateMetadata('FC 27', database);
  const optionalDbIsUnion: Assert<Equal<typeof metadata, Fc27Metadata<'main' | 'fut'>>> = true;
  const mainMetadata = await loadTemplateMetadata('FC 27', undefined);
  const defaultDbIsMain: Assert<Equal<typeof mainMetadata, Fc27Metadata<'main'>>> = true;
  return { metadata, optionalDbIsUnion, mainMetadata, defaultDbIsMain };
}

export type WageIsNumber = Assert<Equal<Fc27Record<'players'>['wage'], number>>;
export type ReleaseClauseIsNumber = Assert<Equal<Fc27Record<'players'>['releaseclause'], number>>;
export type RemovedCareerTableIsExcluded = Assert<Equal<'career_managerinfo' extends Fc27TableName ? true : false, false>>;
export type RemovedCareerTableExistsInFc26 = Assert<Equal<'career_managerinfo' extends Fc26TableName ? true : false, true>>;
