import type { ClubCreationProfile, CreateClubInput, CreateClubOptions, CreateClubResult } from '../../../domain/club-creation-models.js';
import type { EaDatabase } from '../../../domain/models.js';
import { clubContext } from './club-context.js';
import { addClubKits } from './club-kits.js';
import { addClubManager, addClubRelations, addClubTeam } from './club-records.js';
import { addClubTactics } from './club-tactics.js';

export class ClubDatabaseService {
  constructor(readonly profile: ClubCreationProfile, private readonly year: number,
    private readonly mentalitiesPerClub: number | 'detect') {}

  create(database: EaDatabase, input: CreateClubInput, options: CreateClubOptions): CreateClubResult {
    const context = clubContext(database, input, options, this.year);
    const team = addClubTeam(context);
    const kits = addClubKits(context);
    const formationId = addClubTactics(context, this.mentalitiesPerClub);
    addClubRelations(context);
    const managerId = addClubManager(context);
    const tables = context.plan.finish(!options.dryRun);
    const assetId = team.assetid as number;
    return { profile: this.profile, databaseIndex: database.index, teamId: context.teamId, assetId,
      templateTeamId: context.donor.teamid as number, leagueId: input.leagueId, countryId: context.countryId,
      stadiumId: context.stadium.stadiumid as number, formationId, managerId, colors: context.colors, kits, team,
      idGenerated: options.autoGenerateId ?? true, created: !options.dryRun, rosterSize: 0,
      assets: { badgeAssetId: assetId, badgeAssetProvided: input.assetId !== undefined, kitAssetTeamId: context.teamId,
        externalKitTexturesRequired: kits.some(kit => !kit.generic) }, tables };
  }
}
