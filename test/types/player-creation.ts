import { PLAYER_POSITIONS, PLAYER_ATTRIBUTES, PlayerCreationService, eaFcFileService, fifaDatabaseService,
  readTemplateDatabase, withFileOperations, type EaFileSnapshot, type CreatePlayerInput, type CreatePlayerOptions,
  type CreatePlayerResult, type PlayerAttribute, type PlayerPosition, type PlayerPositionId,
  type PlayerRandomizationOptions, type RandomizablePlayerField, type FileOperations } from '../../src/index.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;
export type InputContract = Assert<Equal<Parameters<FileOperations['createPlayer']>[0], CreatePlayerInput>>;
export type OutputContract = Assert<Equal<ReturnType<FileOperations['createPlayer']>, CreatePlayerResult>>;
export type OptionalIdGeneration = Assert<Equal<CreatePlayerOptions['autoGenerateId'], boolean | undefined>>;
export type JsonOmitsCreation = Assert<Equal<'createPlayer' extends keyof EaFileSnapshot ? true : false, false>>;
export const position: PlayerPosition = 'GK';
export const numericPosition: PlayerPositionId = PLAYER_POSITIONS.CB;
export const attribute: PlayerAttribute = PLAYER_ATTRIBUTES[0];
export const randomField: RandomizablePlayerField = 'height';
export const random = { seed: 42, variation: 3, fields: ['gkreflexes', 'height'],
  ranges: { height: { min: 190, max: 195 } } } satisfies PlayerRandomizationOptions;
export const input = { firstName: 'New', lastName: 'Player', teamId: 1, nationality: 54,
  position, attributes: { gkdiving: 80 } } satisfies CreatePlayerInput;

export async function creationTypes(snapshot: EaFileSnapshot) {
  const fc25 = await readTemplateDatabase({ version: 'FC 25' });
  const fc26 = await eaFcFileService.read('Squads', { version: 'FC 26' });
  const fc27 = await readTemplateDatabase({ version: 'FC 27' });
  const fifa = await fifaDatabaseService.read('input.db', 'input.xml');
  const result25: CreatePlayerResult = fc25.createPlayer(input);
  const result26: CreatePlayerResult = fc26.createPlayer(input, { autoGenerateId: true, randomize: false });
  const result27: CreatePlayerResult = fc27.createPlayer({ ...input, playerId: 300000 }, { autoGenerateId: false });
  const resultFifa: CreatePlayerResult = fifa.createPlayer(input, { randomize: random, dryRun: true });
  const hydrated = withFileOperations(snapshot, 'FC 27').createPlayer(input);
  const direct = new PlayerCreationService('FC 27').create(snapshot, input);
  return { result25, result26, result27, resultFifa, hydrated, direct };
}
