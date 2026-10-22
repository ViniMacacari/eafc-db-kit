import type { EaFileSnapshot } from '../../domain/models.js';
import type { FileOperations, PlayerTransferProfile } from '../../domain/transfer-models.js';
import { PlayerTransferService } from '../player-transfer/player-transfer-service.js';

export function withFileOperations<T extends EaFileSnapshot>(file: T,
  profile: PlayerTransferProfile = 'schema'): T & FileOperations {
  const service = new PlayerTransferService(profile);
  const transferPlayer: FileOperations['transferPlayer'] = (playerId, teamId, options) =>
    service.transfer(file, playerId, teamId, options);
  Object.defineProperty(file, 'transferPlayer', { value: transferPlayer, enumerable: false, configurable: true });
  return file as T & FileOperations;
}
