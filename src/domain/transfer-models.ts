import type { EaFcVersion } from './templates.js';
import type { PlayerCreationOperations } from './player-creation-models.js';

export type PlayerTransferProfile = EaFcVersion | 'fifa-db' | 'schema';

export interface TransferPlayerOptions {
  readonly fromTeamId?: number;
  readonly jerseyNumber?: number;
  readonly databaseIndex?: number;
}

export interface TransferTableChange {
  readonly name: string;
  readonly updatedRecords: number;
  readonly removedRecords: number;
}

export interface TransferPlayerResult {
  readonly profile: PlayerTransferProfile;
  readonly databaseIndex: number;
  readonly playerId: number;
  readonly fromTeamId: number;
  readonly toTeamId: number;
  readonly jerseyNumber: number;
  readonly changed: boolean;
  readonly tables: readonly TransferTableChange[];
}

export interface FileOperations extends PlayerCreationOperations {
  readonly transferPlayer: (playerId: number, teamId: number, options?: TransferPlayerOptions) => TransferPlayerResult;
}
