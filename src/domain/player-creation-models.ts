import type { EaRecord, RecordValue } from './models.js';
import type { EaFcVersion } from './templates.js';

export const PLAYER_POSITIONS = {
  GK: 0, SW: 1, RWB: 2, RB: 3, RCB: 4, CB: 5, LCB: 6, LB: 7, LWB: 8,
  RDM: 9, CDM: 10, LDM: 11, RM: 12, RCM: 13, CM: 14, LCM: 15, LM: 16,
  RAM: 17, CAM: 18, LAM: 19, RF: 20, CF: 21, LF: 22, RW: 23, RS: 24, ST: 25, LS: 26, LW: 27,
} as const;

export type PlayerPosition = keyof typeof PLAYER_POSITIONS;
export type PlayerPositionId = typeof PLAYER_POSITIONS[PlayerPosition];
export type PlayerCreationProfile = EaFcVersion | 'fifa-db' | 'schema';

export const PLAYER_ATTRIBUTES = ['acceleration', 'sprintspeed', 'agility', 'balance', 'jumping', 'stamina',
  'strength', 'reactions', 'aggression', 'composure', 'interceptions', 'positioning', 'vision', 'ballcontrol',
  'crossing', 'curve', 'dribbling', 'finishing', 'freekickaccuracy', 'headingaccuracy', 'longpassing',
  'longshots', 'penalties', 'shortpassing', 'shotpower', 'slidingtackle', 'standingtackle', 'volleys',
  'defensiveawareness', 'gkdiving', 'gkhandling', 'gkkicking', 'gkpositioning', 'gkreflexes'] as const;

export type PlayerAttribute = typeof PLAYER_ATTRIBUTES[number];
export type RandomizablePlayerField = PlayerAttribute | 'height' | 'weight' | 'potential' | 'skillmoves' | 'weakfootabilitytypecode';
export type PlayerCreationValues = Readonly<Record<RandomizablePlayerField, number>>;

export interface PlayerRandomizationOptions {
  readonly seed?: number;
  readonly variation?: number;
  readonly fields?: readonly RandomizablePlayerField[];
  readonly ranges?: Readonly<Partial<Record<RandomizablePlayerField, { readonly min: number; readonly max: number }>>>;
}

export interface CreatePlayerInput {
  readonly firstName: string;
  readonly lastName: string;
  readonly teamId: number;
  readonly position: PlayerPosition | PlayerPositionId;
  readonly nationality: number;
  readonly playerId?: number;
  readonly commonName?: string;
  readonly jerseyName?: string;
  readonly jerseyNumber?: number;
  readonly nationalTeamId?: number;
  readonly nationalJerseyNumber?: number;
  readonly baseRating?: number;
  readonly potential?: number;
  readonly birthDate?: string;
  readonly height?: number;
  readonly weight?: number;
  readonly preferredFoot?: 'left' | 'right';
  readonly skillMoves?: number;
  readonly weakFootAbility?: number;
  readonly attributes?: Readonly<Partial<Record<PlayerAttribute, number>>>;
  readonly fields?: Readonly<Record<string, RecordValue>>;
}

export interface CreatePlayerOptions {
  readonly autoGenerateId?: boolean;
  readonly randomize?: boolean | PlayerRandomizationOptions;
  readonly databaseIndex?: number;
  readonly referenceYear?: number;
  readonly dryRun?: boolean;
}

export interface PlayerCreationTableChange {
  readonly name: string;
  readonly addedRecords: number;
  readonly updatedRecords: number;
}

export interface CreatePlayerResult {
  readonly profile: PlayerCreationProfile;
  readonly databaseIndex: number;
  readonly playerId: number;
  readonly teamId: number;
  readonly jerseyNumber: number;
  readonly nationalJerseyNumber: number | null;
  readonly idGenerated: boolean;
  readonly created: boolean;
  readonly randomSeed: number | null;
  readonly randomizedFields: readonly RandomizablePlayerField[];
  readonly baseValues: PlayerCreationValues;
  readonly values: PlayerCreationValues;
  readonly player: EaRecord;
  readonly tables: readonly PlayerCreationTableChange[];
}

export interface PlayerCreationOperations {
  readonly createPlayer: (input: CreatePlayerInput, options?: CreatePlayerOptions) => CreatePlayerResult;
}
