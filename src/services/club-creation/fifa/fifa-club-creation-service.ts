import { ClubDatabaseService } from '../shared/club-database-service.js';

export class FifaClubCreationService extends ClubDatabaseService {
  constructor(profile: 'fifa-db' | 'schema') { super(profile, 2026, 'detect'); }
}
