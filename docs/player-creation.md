# Player creation

`file.createPlayer(input, options?)` creates a player in an EA FC 25, 26, or 27 squad/database, or in a compatible standalone FIFA `.db` mapped by the caller's XML. Creation happens synchronously in memory; use the usual writer to save it. Career creation is outside this shortcut's scope.

## Create and save

```ts
import { eaFcFileService } from 'eafc-db-kit';

const source = './Squads';
const file = await eaFcFileService.read(source, { version: 'FC 27' });

const result = file.createPlayer({
  firstName: 'João',
  lastName: 'Silva',
  teamId: 1,
  nationality: 54,
  position: 'GK',
  baseRating: 75,
});

await eaFcFileService.write(source, './Squads-edited', file);
console.log(result.playerId, result.player, result.tables);
```

Read all tables by omitting `tables`. Every table and field in the selected database must have matching metadata. A player needs a destination club and a nationality ID from the database's mapping. Gender is taken from the destination team. Unknown gender, ambiguous club/national mappings, filtered reads, and unsupported layouts fail before any records are changed.

For an external FIFA pair:

```ts
import { fifaDatabaseService } from 'eafc-db-kit';

const source = './fifa_ng_db.db';
const xml = './fifa_ng_db-meta.xml';
const file = await fifaDatabaseService.read(source, xml);
const result = file.createPlayer({
  firstName: 'New', lastName: 'Player', teamId: 1, nationality: 54, position: 'CB',
});
await fifaDatabaseService.write(source, xml, './fifa_ng_db-created.db', file);
```

The database must contain the supported roster fields and a usable name bank or `editedplayernames`. XML remains mandatory for FIFA reads and writes. The generic profile does not identify the FIFA edition or guarantee every historical schema.

## Automatic and manual IDs

`autoGenerateId` is an optional boolean and defaults to `true`. Automatic allocation scans player references throughout the selected database, including alternate player tables, team sheets, created-player registrations, head references, and custom/downloaded morph asset IDs. It chooses an ID after the largest used ID within the mapped range; if that reaches the maximum, it searches for an unused gap. IDs are checked against field ranges during creation. If a related table has a narrower ID range, creation fails before application.

To supply an ID:

```ts
const result = file.createPlayer({
  firstName: 'New', lastName: 'Player', teamId: 1, nationality: 54, position: 'ST',
  playerId: 300000,
}, { autoGenerateId: false });
```

An explicit `playerId` requires `autoGenerateId: false`. Disabling generation requires `playerId`. An existing player ID or an ID referenced elsewhere cannot be reused. Names and link artificial keys receive separate unused IDs.

## Base values and positions

The default `baseRating` is **70**. `overallrating` is assigned this value, and attribute profiles apply position-specific offsets to it. These are library generation profiles, not EA's official overall-rating calculation. Generated attributes are clipped to 1–99. The base profile remains the default: no random value is generated unless `randomize` is enabled.

| Positions | Main strengths |
| --- | --- |
| `GK` | Diving, handling, kicking, positioning, reflexes, reactions, jumping; low outfield attacking/defending values |
| `SW` | Central defending with more passing and mobility |
| `RCB`, `CB`, `LCB` | Tackling, defensive awareness, interceptions, strength, heading, jumping |
| `RB`, `LB` | Pace, stamina, tackling, crossing |
| `RWB`, `LWB` | More pace, crossing, and dribbling than fullbacks |
| `RDM`, `CDM`, `LDM` | Interceptions, defending, stamina, short/long passing |
| `RCM`, `CM`, `LCM` | Passing, vision, ball control, stamina, composure |
| `RM`, `LM` | Pace, crossing, agility, dribbling |
| `RAM`, `CAM`, `LAM` | Vision, passing, ball control, agility, attacking positioning |
| `RF`, `CF`, `LF` | Attacking midfield strengths with better finishing and positioning |
| `RW`, `LW` | Wide-player strengths with better finishing and attacking positioning |
| `RS`, `ST`, `LS` | Finishing, positioning, shot power, volleys, heading, reactions |

All 28 position codes from 0 through 27 are supported. Use a position name or its numeric value; `PLAYER_POSITIONS` exports the mapping. `PLAYER_ATTRIBUTES` exports the supported attribute names. Bench/reserve codes 28/29 are not primary player positions.

Default height/weight are 190 cm/85 kg for goalkeepers, 187 cm/82 kg for sweepers/center backs, and 178 cm/74 kg for other positions. Potential defaults to `min(99, baseRating + 5)`. Skill moves and weak-foot fields have deterministic numeric defaults. Explicit input values take priority over generated values.

```ts
file.createPlayer({
  firstName: 'New', lastName: 'Player', teamId: 1, nationality: 54, position: 'CB',
  baseRating: 75,
  potential: 85,
  height: 190,
  weight: 86,
  attributes: { strength: 90, standingtackle: 85, finishing: 35 },
});
```

The six display fields are derived from the generated attributes. For goalkeepers they contain diving, handling, kicking, reflexes, speed, and positioning. For outfield players they use rounded attribute averages for pace, shooting, passing, dribbling, defending, and physicality. These averages are library summaries rather than the official EA weighting formula.

## Optional randomization and accepting selected fields

`randomize: false` is the default. `randomize: true` varies the 34 supported attributes by up to five points around their base values. The generated seed is returned as `randomSeed`.

For reproducible results and control over accepted fields:

```ts
const result = file.createPlayer({
  firstName: 'New', lastName: 'Keeper', teamId: 1, nationality: 54,
  position: 'GK', baseRating: 75,
  attributes: { gkhandling: 80 },
}, {
  randomize: {
    seed: 42,
    variation: 3,
    fields: ['gkdiving', 'gkhandling', 'gkreflexes', 'height'],
    ranges: { height: { min: 190, max: 198 } },
  },
});
```

Only selected fields accept random values. Unselected fields keep their base values, and explicit inputs override random values, so `gkhandling` remains 80 in this example. An empty `fields: []` accepts no random values. To reject all randomization, omit `randomize` or set it to `false`.

| Setting | Behavior |
| --- | --- |
| `seed` | Integer from 0 through 4,294,967,295; identical inputs and seed produce identical numeric values |
| `variation` | Integer from 0 through 99; default 5; uniform integer variation above/below each field's base |
| `fields` | Accepted random fields; default all attributes plus any additional fields specified in `ranges` |
| `ranges` | Per-field inclusive integer `{ min, max }`, replacing the default variation interval |

Extra randomizable fields are `height`, `weight`, `potential`, `skillmoves`, and `weakfootabilitytypecode`. Their domains are 130–215 cm, 30–115 kg, 1–99, 1–5, and 1–5 respectively. Attribute ranges must stay within 1–99. Random potential is kept at least equal to `baseRating`; an explicit potential below it is rejected. Names, identity, gender, nationality, appearance assets, and position are never randomized.

`baseValues` reports the position profile, `values` reports the accepted numeric values, and `randomizedFields` reports fields accepted from random generation after explicit overrides.

## Preview before applying

```ts
const options = { randomize: { seed: 42, variation: 4 } };
const preview = file.createPlayer(input, { ...options, dryRun: true });
console.log(preview.baseValues, preview.values, preview.player, preview.tables);

const accepted = file.createPlayer(input, options);
```

`dryRun: true` builds and validates the complete creation plan and returns `created: false` without changing the file. Remove `dryRun` to apply it. Keep the same seed to retain the numeric preview. Preview IDs and shirt numbers are not reserved; another edit can change their availability. A preview without a fixed seed can be reproduced by passing its returned seed in the later randomization options.

## Input, options, and result

Required input fields are `firstName`, `lastName`, `teamId`, `nationality`, and `position`. Optional fields include the values shown above, `commonName` (default empty), `jerseyName` (default surname), `jerseyNumber`, `birthDate` (`YYYY-MM-DD`), `preferredFoot` (`left`/`right`, default right), `skillMoves`, `weakFootAbility` (mapped integer values from 1 through 5), `nationalTeamId`, and `nationalJerseyNumber`.

A national team is added only when explicitly requested. It must be classified as national and have the same gender as the club. Club and national shirt numbers are allocated independently using the smallest free mapped number from 1 through 99. Requested occupied numbers are rejected. Every existing sheet for a target team must have a free non-starting slot; team size is limited to 52 or a smaller mapped sheet capacity.

`fields` accepts advanced mapped player fields, such as appearance, traits, or role codes. Unknown fields and fields managed by dedicated creation inputs are rejected. Advanced values must fit the actual schema. This option does not install external heads, boots, or other game assets.

| Creation option | Default |
| --- | --- |
| `autoGenerateId` | `true` |
| `randomize` | `false` |
| `databaseIndex` | The sole database containing roster tables |
| `referenceYear` | 2024 for FC 25, 2025 for FC 26, 2026 for FC 27 and generic profiles |
| `dryRun` | `false` |

Reference years are deterministic and do not use the host clock. Default birth date is January 1 twenty years before the reference year, join date is July 1 of that year, and contract end is three years after it. A supplied birth date must precede the reference season. The caller can override the reference year for a different season/database.

The result contains `profile`, `databaseIndex`, `playerId`, `teamId`, `jerseyNumber`, `nationalJerseyNumber`, `idGenerated`, `created`, `randomSeed`, `randomizedFields`, `baseValues`, `values`, `player`, and `tables`. Each changed-table entry contains `name`, `addedRecords`, and `updatedRecords`. After creation, `player` is the inserted player record and can be edited using the normal record API.

## Related records

| Table | Creation behavior |
| --- | --- |
| `players` | Insert a complete mapped player record with fresh identity and generated attributes |
| `dcplayernames` / `playernames` | Reuse existing names; allocate new name IDs where needed, preferring the custom name bank |
| `editedplayernames` | Insert the explicit first name, surname, common name, and jersey name when present |
| `createplayer` | Register the new ID with a unique creation key when present |
| `cp_skeletal`, `cp_flesh`, `cp_fat` | Insert mapped morph records under the new head asset ID; copy the generic donor's available CP/DC morphs or use neutral numeric values |
| `playernamemap` | Register the default no-audio commentary mapping when present |
| `teamplayerlinks` | Insert a new reserve link for the club and optional national team, with a unique artificial key and cleared statistics |
| `default_teamsheets`, `teamsheets`, `cm_teamsheets` | Append to the first available non-starting slot in every existing target-team sheet |
| `temp_players` | Insert a corresponding player only when this temporary table is populated |
| `temp_teamplayerlinks`, `teamplayerlinks_vh` | Insert links only when the table already contains the target team |

New names are checked against the target field's UTF-8 byte capacity and are never silently truncated. If only `editedplayernames` is available, literal names are stored there and name IDs use zero. A schema must permit those values. Duplicate text reuses a name ID, including using the surname for the jersey name.

Generic appearance is copied from the first existing generic player of the same gender when available; remaining appearance fields use version defaults and mapped numeric defaults. `headassetid` uses the new player ID, real-face flags are cleared, and the creation registry retains the generic donor's ID when one was used. Available CP morph tables receive independent records using matching CP/DC donor data or neutral values. Existing downloaded morphs are preserved. Traits and role codes default to zero, secondary positions to the schema's empty value, and no external appearance files are generated.

Existing starters, captain/set-piece assignments, and tactical starting elevens are retained because the player joins as a reserve. Contextual records such as `cmplayers`, training players, youth history, statistics, loans, awards, and contracts are not universal player registrations and receive no fabricated entries. Inactive scratch tables remain empty. Active career contract state is rejected even in a standalone database.

Insertions and sheet changes are validated together, including ID ranges, exact record fields, UTF-8 capacity, shirt availability, and writable table record properties. A failed creation leaves the decoded file unchanged. Applying a plan replaces affected tables' record arrays and edited sheet rows; applications holding earlier array/row references should retrieve those records again.

The original binary is still required for saving. Fixed save allocations can limit additions even when mapped IDs and squad slots remain available. A failed write does not roll back an in-memory creation. Read the written output before editing that binary again. See [writing](writing.md).

## Services, snapshots, and tests

`createPlayer` is non-enumerable, like `transferPlayer` and `createClub`. JSON exports and `structuredClone` contain only data. Use `withFileOperations(snapshot, 'FC 27')` to restore the shortcuts, or call `new PlayerCreationService('FC 27').create(snapshot, input, options)` directly. Newly created clubs can be used as destinations; see [club creation](club-creation.md).

```text
src/services/player-creation/
  player-creation-service.ts
  fc25/fc25-player-creation-service.ts
  fc26/fc26-player-creation-service.ts
  fc27/fc27-player-creation-service.ts
  fifa/fifa-player-creation-service.ts
  shared/
    creation-inputs.ts
    creation-plan.ts
    player-identifiers.ts
    player-appearance.ts
    player-record.ts
    player-roster.ts
    player-values.ts
src/domain/player-creation-models.ts
```

Version adapters define reference seasons and appearance defaults. Shared services own argument validation, numeric profiles/randomization, identity and names, complete player records, roster/sheet insertion, and applying the validated plan. `creation-plan.ts` wraps the low-level `services/shared/record-creation-plan.ts` validator also used by club creation, preserving player-specific errors.

`INVALID_OPTIONS` reports malformed inputs or options. `INVALID_PLAYER_CREATION` reports data conflicts, invalid mapped values, unavailable IDs/numbers, or exhausted squads/names. `UNSUPPORTED_OPERATION` reports careers, filtered/unmapped data, or unsupported schemas. Binary writes retain their own error codes and protections.

Tests cover all 28 positions, automatic/manual IDs, referenced IDs, female clubs, optional national membership, selective seeded randomization, explicit overrides, previews, names, mirrors, atomic failures, JSON snapshots, and creation followed by a transfer. Synthetic database/squad round trips cover both byte orders. Integration tests create, serialize, and reread players in FC 25/26/27 main templates and the optional local FC 27 squad, with independent CRC checks and preserved source bytes. The npm checker also creates and writes through an installed package.

Loading newly created players in the game has not been verified. Structural round trips do not establish game-engine behavior, external asset availability, or compatibility with every FIFA edition.
