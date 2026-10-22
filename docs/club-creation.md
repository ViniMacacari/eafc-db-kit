# Club creation

`file.createClub(input, options?)` creates a club and its related database records in memory. It supports EA FC 25, 26, and 27 squads and main databases, plus compatible standalone FIFA `.db` files mapped by their XML descriptors. Career creation is excluded.

Read all tables. A filtered, partially mapped, ambiguous, or active career database is rejected before any changes are applied.

## Quick start

```ts
import { eaFcFileService } from 'eafc-db-kit';

const source = './Squads';
const file = await eaFcFileService.read(source, { version: 'FC 27' });
const club = file.createClub({
  name: 'Novo FC',
  leagueId: 13,
  colors: ['#123456', '#FFFFFF', '#FFCC00'],
});

console.log(club.teamId, club.kits, club.tables, club.assets);
await eaFcFileService.write(source, './Squads-edited', file);
```

Club colors are mandatory. Supply one to three `#RRGGBB` strings, RGB objects with integer channels from 0 to 255, or a mixture. These correspond to the three color slots in the database. With fewer colors, unused club slots repeat the first color. Invalid or missing colors are rejected; they are never randomly selected.

The club initially has no players. Add them using `file.createPlayer({ ..., teamId: club.teamId })` or `file.transferPlayer(playerId, club.teamId)`. Existing players, managers, memberships, and physical stadium records are retained.

## Database and XML

```ts
import { fifaDatabaseService } from 'eafc-db-kit';

const source = './input.db';
const xml = './input.xml';
const file = await fifaDatabaseService.read(source, xml);
const club = file.createClub({
  name: 'Novo FC', leagueId: 13,
  colors: [{ r: 18, g: 52, b: 86 }, '#FFFFFF'],
});

console.log(club.teamId);
await fifaDatabaseService.write(source, xml, './output.db', file);
```

The XML must describe the binary completely. Schema adapters inspect available fields and the default mentality layout; supporting a mapped pair does not imply compatibility with every FIFA edition or a different club schema.

## Input and defaults

| Input | Behavior |
| --- | --- |
| `name` | Required, nonempty; must fit the mapped UTF-8 field |
| `leagueId` | Required existing domestic league; national leagues are rejected |
| `colors` | Required palette containing one to three colors |
| `teamId` | Manual unused ID; requires `autoGenerateId: false` |
| `assetId` | Badge/resource reference; defaults to the new team ID; an existing reference may be reused |
| `countryId` | Defaults to the league country; required when the league has no usable country |
| `gender` | Inherits `iswomencompetition`; must match the league; required when that mapping is absent |
| `templateTeamId` | Existing club of the same gender; defaults to a usable club in the selected league, then another domestic club |
| `stadiumId` | Existing stadium; defaults to an available generic stadium, then the template club's stadium |
| `stadiumName` | Optional custom name, stored in supported stadium link/assignment fields |
| `foundationYear` | Reference season year by default |
| `baseRating` | `70`; supplies overall, attack, midfield, defense, and matchday ratings; range `1..99` |
| `defensiveDepth` | `50`; range `1..100` |
| `rivalTeamId` | Existing team of the same gender; defaults to the template club |
| `kits` | Optional configuration for home, away, goalkeeper, and third kits |
| `formation` | Optional formation template, manual ID, and tactical fields |
| `manager` | Optional new manager's ID, name, nationality, and fields |
| `fields` | Additional mapped `teams` values, such as `clubworth` |

Template selection preserves valid presentation and tactical settings while assigning a new identity. Player slots and set-piece roles are cleared, team trophies and previous-winner flags are reset, and the league link starts with fresh match statistics. Team ratings, colors, year, stadium references, and manager identity receive new defaults. The manager defaults to `Club Manager`, the club gender/country, age 45 at the reference season, a generic appearance, and a three-star rating where mapped. No existing manager is transferred or renamed.

Advanced `fields` objects accept only names present in the corresponding table and values supported by its mapped types/ranges. Identity, colors, and relationship fields managed by dedicated options are protected. For example, use `colors` rather than `fields.teamcolor1r`, and `formation.formationId` rather than `formation.fields.formationid`. Other mapped settings can override template values.

## Kits and manual configuration

Four kits are created by default: home `0`, away `1`, goalkeeper `2`, and third `3`. Set `kits.third: false` to create only the first three. The home kit uses the club palette. Away kits swap the main colors, goalkeeper kits use the RGB complement of the primary color, and third kits use the third color or a contrasting fallback. Numbers and names default to contrasting black or white. These choices are deterministic and can all be replaced manually.

```ts
const club = file.createClub({
  name: 'Novo FC',
  leagueId: 13,
  teamId: 150000,
  assetId: 1,
  colors: ['#123456', '#FFFFFF'],
  stadiumId: 10,
  stadiumName: 'New Arena',
  foundationYear: 1990,
  baseRating: 78,
  fields: { clubworth: 10000000 },
  kits: {
    home: {
      kitId: 45000,
      colors: ['#123456', '#FFFFFF'],
      numberColor: '#FFFFFF',
      jerseyTemplateIndex: 2,
      shortsTemplateIndex: 1,
      socksTemplateIndex: 0,
    },
    away: { colors: ['#FFFFFF', '#123456'] },
    goalkeeper: { colors: ['#FF8800'], numberColor: '#000000' },
    third: false,
  },
  formation: { templateFormationId: 1, fields: { formationname: 'Custom' } },
  manager: { firstName: 'New', lastName: 'Coach', nationality: 54 },
}, { autoGenerateId: false });
```

IDs in examples must be available in the actual database. For each kit, `templateKitId` chooses an existing kit's rendering/font settings; `kitId` overrides the new artificial key. Other options are `generic`, `year` (default `0`), `hudPattern` (default `0`), and `fields` for other mapped kit settings. Kit types and team ownership are managed automatically. Kit colors remain independently configurable from the mandatory club palette.

EA FC 26/27 have generic kit fields; generated kits default to `isgeneric: 1` and template indices `0`. The bundled EA FC 25 schema lacks those fields and requires external textures. Explicit generic/template-index options on an incompatible schema are rejected. `generic: false` also declares a kit that needs external textures. `hudPattern` requires a mapped HUD table. All rendering and numeric settings must fit the actual XML/binary schema.

`formation.formationId` and `manager.managerId` allow manual unused IDs. Formation settings come from the selected club or `templateFormationId`; `formation.fields` overrides mapped tactics. `manager.fields` configures additional mapped appearance/settings. If the schema has no manager table, the result has `managerId: null`; explicit manager options require that table.

## Options, preview, and result

| Option | Default | Behavior |
| --- | --- | --- |
| `autoGenerateId` | `true` | Allocates an unused team ID; `false` requires `input.teamId` |
| `databaseIndex` | Automatic | Selects a unique club database; required if several match |
| `referenceYear` | FC 25: `2024`; FC 26: `2025`; FC 27/FIFA/schema: `2026` | Reference year for founding and manager dates |
| `dryRun` | `false` | Validates the entire plan and returns a preview without applying it |

```ts
import type { CreateClubInput } from 'eafc-db-kit';

const input = {
  name: 'Novo FC', leagueId: 13, colors: ['#123456', '#FFFFFF'],
} satisfies CreateClubInput;

const preview = file.createClub(input, { dryRun: true });
console.log(preview.teamId, preview.kits, preview.tables, preview.assets);
const applied = file.createClub(input);
```

Repeating a preview with the same input and unchanged file gives the same defaults and IDs. Previews do not reserve IDs. Automatic allocation scans existing team records and references, including kit ownership, historical team IDs, rivals, and badge IDs. It tries an ID above the greatest usable reference, then searches free gaps within the mapped range. Kit, formation, manager, sheet, and league-link keys also avoid their existing IDs/references.

The result contains `profile`, `databaseIndex`, `teamId`, `assetId`, `templateTeamId`, `leagueId`, `countryId`, `stadiumId`, `formationId`, `managerId`, normalized `colors`, generated `kits` and `team` records, `idGenerated`, `created`, `rosterSize: 0`, `assets`, and per-table `tables` changes. Each kit includes its type, numeric type ID, new kit ID, normalized palette, generic flag, and complete record. `created` is false for a preview.

`assets.badgeAssetId` is the reference written into the club. `badgeAssetProvided` indicates an explicit `assetId` option; it does not verify that the asset exists. `kitAssetTeamId` identifies ownership for external kit assets. `externalKitTexturesRequired` is true if any generated kit is not generic.

## Related tables

| Table | Creation behavior |
| --- | --- |
| `teams` | New club identity, colors, ratings, and template presentation settings; clears roster roles and trophies |
| `leagueteamlinks` | New club membership, unique artificial key when mapped, next table positions, empty match statistics |
| `teamnationlinks` | New country/league association when mapped |
| `teamkits` | New kit keys, ownership, types, palettes, and rendering settings |
| `teamkithudvalues` | Matching HUD row per kit when mapped |
| `formations` | New formation key and club ownership with template or manual tactics |
| `default_teamsheets` | Empty lineup/reserves and set-piece roles |
| `default_mentalities` | Cleared tactical lineups with new formation references; five-row blocks in FC 25/26 and one club-scoped row in FC 27 |
| `defaultteamdata` | Matching formation positions/offsets and defensive depth when mapped |
| `teamstadiumlinks` | Reuses an existing stadium asset; optional legacy custom name |
| `stadiumassignments` | New row when a custom name is requested and supported |
| `manager` | A new generic coach with a unique ID when mapped |
| `temp_teams` | Copies the new club when the scratch table is active |
| `teamsheets`, `cm_teamsheets`, `mentalities`, `cm_mentalities` | Copies only existing template-club sheets and associated tactics; remaps sheet/formation references and clears players |
| `cm_default_mentalities` | Mirrors tactical defaults when the selected template club has active rows |
| `temp_formations`, `teamformationteamstylelinks` | Copies existing template-club entries with new ownership/formation references |
| `teamstadiumlinkscache` | Adds a matching row when the cache is active |

Global scratch rows with team ID `0`/`-1` do not become club-specific records. Mode-specific catalogs such as `clubcustomization_kit`, `smteams`, and `factory_teams`, plus competition-kit overrides, sponsorships, VIP/counterpart links, statistics, career contracts, and historical data receive no fabricated registrations. The default team palette supplies the new club's colors without copying another club's kit ownership or roster.

## Saving, assets, and limits

This operation creates database records. It does not produce crest images, kit textures, 3D models, audio, or localization database entries. Supply/install external assets using the game's tooling when necessary, or explicitly reuse existing badge references. Generic kit records express schema-supported rendering settings; their appearance in the game has not been verified.

An empty club needs players and valid lineup assignments before match use. Adding a league membership does not rebuild competition schedules, tournament participant definitions, career competition data, or game-specific limits on league size. The operation does not claim to create a playable league expansion by itself.

All affected rows and writable table properties are validated before applying changes. Failures leave the decoded file unchanged. Applying a plan replaces affected record arrays; retrieve rows again if holding earlier array references. `INVALID_CLUB_CREATION` reports invalid input, missing schema requirements, conflicts, exhausted IDs, or invalid mapped values. `UNSUPPORTED_OPERATION` reports unsupported source kinds/profiles. Writers retain their own error codes and protections.

Saving requires the original binary and matching metadata/XML. Fixed squad allocations can run out of room; creation in memory cannot guarantee that an arbitrarily large addition fits in a save. A failed write does not undo in-memory creation. Read the written output again before editing that binary further. See [writing](writing.md) and [FIFA database services](fifa-databases.md).

## Services and verification

The shortcut is non-enumerable and is omitted from JSON, incremental exports, spreads, and structured clones. Restore it with `withFileOperations(snapshot, 'FC 27')`, or call `new ClubCreationService('FC 27').create(snapshot, input, options)` directly.

```text
src/domain/club-creation-models.ts
src/services/club-creation/
  club-creation-service.ts
  fc25/fc25-club-creation-service.ts
  fc26/fc26-club-creation-service.ts
  fc27/fc27-club-creation-service.ts
  fifa/fifa-club-creation-service.ts
  shared/
    club-inputs.ts
    club-context.ts
    club-plan.ts
    club-records.ts
    club-kits.ts
    club-tactics.ts
    club-database-service.ts
src/services/shared/record-creation-plan.ts
```

Version adapters define reference years and mentality layouts. Club identity/relationships, kits, tactics, input validation, and orchestration have separate services. Player and club creation share only the low-level mapped-record validation and staged insertion mechanism.

Tests cover mandatory palettes, manual overrides, all adapters, referenced IDs, allocation gaps, female leagues, previews, atomic errors, active mirrors, JSON snapshots, both binary byte orders, and `.db`/XML and squad round trips. Integrations create a club, add a player, transfer another player, serialize, and compare every record after rereading the FC 25/26/27 templates and optional local FC 27 squad. Independent CRC checks and unchanged source bytes are verified. The npm checker exercises club creation from an installed package. These checks establish structural serialization; in-game loading remains unverified.
