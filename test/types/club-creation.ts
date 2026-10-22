import { ClubCreationService, eaFcFileService, fifaDatabaseService, readTemplateDatabase, withFileOperations,
  type CreateClubInput, type CreateClubOptions, type CreateClubResult, type ClubColor, type ClubColors,
  type ClubKitInput, type ClubFormationInput, type ClubManagerInput, type EaFileSnapshot, type FileOperations } from '../../src/index.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;
export type InputContract = Assert<Equal<Parameters<FileOperations['createClub']>[0], CreateClubInput>>;
export type OutputContract = Assert<Equal<ReturnType<FileOperations['createClub']>, CreateClubResult>>;
export type RequiredColors = Assert<Equal<{} extends Pick<CreateClubInput, 'colors'> ? true : false, false>>;
export type NonemptyColors = Assert<Equal<readonly [] extends ClubColors ? true : false, false>>;
export type NoJsonMethod = Assert<Equal<'createClub' extends keyof EaFileSnapshot ? true : false, false>>;
export type OptionalGeneration = Assert<Equal<CreateClubOptions['autoGenerateId'], boolean | undefined>>;
export const color = { r: 20, g: 30, b: 40 } satisfies ClubColor;
export const kit = { colors: ['#123456'], jerseyTemplateIndex: 2, numberColor: '#FFFFFF' } satisfies ClubKitInput;
export const formation = { templateFormationId: 1 } satisfies ClubFormationInput;
export const manager = { firstName: 'New', lastName: 'Coach' } satisfies ClubManagerInput;
export const input = { name: 'New FC', leagueId: 13, colors: [color, '#FFFFFF'], kits: { home: kit, third: false }, formation, manager } satisfies CreateClubInput;

export async function clubTypes(snapshot: EaFileSnapshot) {
  const fc25 = await readTemplateDatabase({ version: 'FC 25' });
  const fc26 = await eaFcFileService.read('Squads', { version: 'FC 26' });
  const fc27 = await readTemplateDatabase({ version: 'FC 27' });
  const fifa = await fifaDatabaseService.read('input.db', 'input.xml');
  const a: CreateClubResult = fc25.createClub(input);
  const b: CreateClubResult = fc26.createClub(input, { dryRun: true });
  const c: CreateClubResult = fc27.createClub({ ...input, teamId: 150000 }, { autoGenerateId: false });
  const d: CreateClubResult = fifa.createClub(input);
  return [a, b, c, d, withFileOperations(snapshot).createClub(input), new ClubCreationService('FC 27').create(snapshot, input)];
}
