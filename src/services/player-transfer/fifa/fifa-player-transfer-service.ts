import type { PlayerTransferProfile } from '../../../domain/transfer-models.js';
import { RosterTransferService } from '../shared/roster-transfer-service.js';
import { extendedRoles } from '../shared/team-sheets.js';

export class FifaPlayerTransferService extends RosterTransferService {
  constructor(profile: Extract<PlayerTransferProfile, 'fifa-db' | 'schema'> = 'fifa-db') { super(profile, extendedRoles); }
}
