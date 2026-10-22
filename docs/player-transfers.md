# Player transfers

Files returned by the read and parse APIs expose `file.transferPlayer(playerId, teamId, options?)`. This synchronous operation edits the decoded data in memory. Save it using the corresponding file service or writer.

Club transfers support EA FC 25, 26, and 27 squads and standalone databases. External FIFA `.db` files use their supplied XML mapping and must contain the supported roster fields. Career transfers are outside this API's current scope.

## Transfer in a squad

```ts
import { eaFcFileService } from 'eafc-db-kit';

const source = './Squads';
const file = await eaFcFileService.read(source, { version: 'FC 27' });
const result = file.transferPlayer(231747, 1, { fromTeamId: 243 });

await eaFcFileService.write(source, './Squads-edited', file);
console.log(result);
```

Read the complete database: omit the `tables` filter and supply matching metadata for every table and field in the selected database. The operation needs club mappings, lineups, and any loan or mirror records present in the file. A filtered read fails even when it includes `players`, `teams`, and `teamplayerlinks`.

When a player has one club membership, two arguments are sufficient:

```ts
file.transferPlayer(playerId, destinationTeamId);
```

A player can have a club link, a national-team link, and additional club links for classic or custom teams. National links remain intact. Multiple club links require `fromTeamId` to identify which one to move. For example, the bundled FC 27 database includes both ordinary and classic Real Madrid memberships for player `231747`; `fromTeamId: 243` selects the ordinary club.

The source must be classified as `squad` or `database`. `read` recognizes common squad filenames. For a renamed squad, use `kind: 'squad'`. For bytes, provide `kind` or a recognized `fileName`:

```ts
import { loadTemplateMetadata, parseEaFile, serializeEaFile, withFileOperations } from 'eafc-db-kit';

const metadata = await loadTemplateMetadata('FC 26');
const file = withFileOperations(parseEaFile(bytes, { metadata, kind: 'squad' }), 'FC 26');
file.transferPlayer(playerId, destinationTeamId);
const output = serializeEaFile(bytes, file);
```

`parseEaFile` uses the generic `schema` transfer profile because metadata alone does not identify a game edition. `withFileOperations` selects a specific profile when the caller knows the version. File reads with `version` select the corresponding profile automatically.

## Transfer in a FIFA database

```ts
import { fifaDatabaseService } from 'eafc-db-kit';

const source = './fifa_ng_db.db';
const xml = './fifa_ng_db-meta.xml';
const file = await fifaDatabaseService.read(source, xml);

file.transferPlayer(231747, 1, { fromTeamId: 243, jerseyNumber: 19 });

await fifaDatabaseService.write(source, xml, './fifa_ng_db-edited.db', file);
```

Both the database and its matching XML are still required. The `fifa-db` profile checks mapped fields and integer ranges; it does not infer or guarantee compatibility with every FIFA edition. Localization-only databases lack the required roster tables and cannot transfer players.

## Options and result

```ts
import type { TransferPlayerOptions, TransferPlayerResult } from 'eafc-db-kit';

const options: TransferPlayerOptions = {
  fromTeamId: 243,
  jerseyNumber: 19,
  databaseIndex: 0,
};
const result: TransferPlayerResult = file.transferPlayer(231747, 1, options);
```

| Option | Default | Meaning |
| --- | --- | --- |
| `fromTeamId` | The sole club membership | Select the source club when the player belongs to several clubs |
| `jerseyNumber` | Preserve the old number if available; otherwise choose the lowest free number | An unused number from 1 through 99 that also fits the mapped field |
| `databaseIndex` | The sole database containing `players`, `teams`, and `teamplayerlinks` | Select a database by its `index` when several contain roster tables |

Player and team IDs must be positive integers. Destination national teams, different player/team genders when known, missing or duplicated records, ambiguous league mappings, and duplicate destination links are rejected.

The result contains `profile`, `databaseIndex`, `playerId`, `fromTeamId`, `toTeamId`, `jerseyNumber`, `changed`, and `tables`. Each changed-table entry contains `name`, `updatedRecords`, and `removedRecords`. Counts refer to records, not fields.

Transferring to the existing source club returns `changed: false` and an empty `tables` list. A different `jerseyNumber` in that case is rejected; this shortcut does not serve as a shirt-number editor.

## Changes made together

| Data | Behavior |
| --- | --- |
| `teamplayerlinks` | Move the selected club link, retain its artificial key, assign the shirt number, and set `position` to reserve value `29` |
| Club statistics in that link | Clear mapped league appearance/goal counters, card counters, and top-scorer flags |
| `temp_teamplayerlinks`, `teamplayerlinks_vh` | Move matching source-club mirror links when present |
| Source `teams` roles | Replace references to the departing player in captain, set-piece, corner-support, and supported throw-in fields |
| `default_teamsheets`, `teamsheets`, `cm_teamsheets` | Update rows identified by the source/destination `teamid`, when present |
| Source starting eleven | Promote an eligible bench player, preferring the same primary position; goalkeeper slots require a goalkeeper; update the default replacement's link position |
| `default_mentalities`, `mentalities`, `cm_mentalities`, `cm_default_mentalities` | Replace source-club references in tactical starting elevens, using the corresponding sheet replacement when eligible |
| Source reserves and substitutions | Remove the departing player from reserve slots and clear custom substitution pairs involving that player |
| Destination sheets | Add the player to the first free slot after the starting eleven; retain the starting eleven |
| `playerloans` | Remove loan entries for this player, making the move permanent |

Roles receive an available outfield player when possible, or a mapped empty value when no replacement exists. Source lineups without an eligible replacement fail validation. In schemas without a source default sheet, a departing starter's link position is assigned to an eligible bench/reserve link. Tactical rows match sheets by team and any shared sheet/profile identifiers; alternative lineups select another eligible player when that replacement is already in their starting eleven. The destination squad is limited to 52 players or the smaller mapped sheet capacity. Every destination sheet must have a free slot after the starting eleven unless it already contains the player.

National memberships, unrelated club memberships, player attributes, wages, contract dates, injuries, and form remain unchanged. This operation does not record a transfer fee, negotiate a contract, change budgets, or simulate game-engine transactions. Career files are rejected, as are active `career_playercontract` or `career_presignedcontract` entries for the selected player in a standalone database or squad.

All edits and removals are planned and validated before application. Validation failures leave the input data unchanged. Records and affected table objects must be ordinary writable objects. Saving remains a separate operation with its own binary validation and output protection; a failed save does not undo an in-memory transfer. Read the written output before applying further edits to that binary.

## JSON and direct service use

The attached method is non-enumerable. JSON exports retain their existing data contract. `JSON.parse`, object spread, and `structuredClone` produce data snapshots without the method. Writers accept these snapshots through `EaFileSnapshot` and `FifaDatabaseSnapshot`.

Reattach operations when importing JSON:

```ts
import { withFileOperations, type EaFileSnapshot } from 'eafc-db-kit';

const snapshot: EaFileSnapshot = JSON.parse(json);
const file = withFileOperations(snapshot, 'FC 27');
file.transferPlayer(playerId, destinationTeamId);
```

The function attaches operations to the supplied object and returns that same object with the additional types. The method remains bound to that object when extracted. The selected profile is not stored in JSON; select it again after importing.

Applications that prefer a separate service can pass the same snapshot directly:

```ts
import { PlayerTransferService } from 'eafc-db-kit';

const transfers = new PlayerTransferService('FC 27');
const result = transfers.transfer(snapshot, playerId, destinationTeamId);
```

## Services and version separation

```text
src/services/
  file-operations/
    with-file-operations.ts
  player-transfer/
    player-transfer-service.ts
    fc25/fc25-player-transfer-service.ts
    fc26/fc26-player-transfer-service.ts
    fc27/fc27-player-transfer-service.ts
    fifa/fifa-player-transfer-service.ts
    shared/
      roster-transfer-service.ts
      team-sheets.ts
      team-mentalities.ts
      transfer-plan.ts
src/domain/
  transfer-models.ts
```

The attachment layer exposes shortcuts. `PlayerTransferService` validates arguments and selects a database and version adapter. Version directories own the game's transfer policy, including supported role fields; FC 26 and FC 27 include the additional corner-support and throw-in roles. Shared services handle roster changes, sheet changes, integer constraints, and applying the validated plan. Future shortcuts should have their own service directories, and future version differences belong in the relevant version adapter.

`INVALID_OPTIONS` reports malformed IDs/options. `INVALID_TRANSFER` reports a transfer that conflicts with the data. `UNSUPPORTED_OPERATION` reports careers, filtered reads, unmapped fields, or unsupported schemas. All use `EaFileError`.

## Validation

`test/player-transfer.test.mjs` covers club/national membership, source selection, shirt collisions, roles, goalkeeper promotion, tactical lineups, link-position replacement without sheets, loans, mirror tables, multiple databases, JSON snapshots, unsupported inputs, and unchanged data on failure. Binary fixtures exercise both byte orders, standalone FIFA/XML pairs, and squad containers with independent CRC checks.

Integration tests move player `231747` from team `243` to team `1` in each bundled main database, serialize the changes, reread all affected tables and the player record, and verify retained memberships and source bytes. The optional local FC 27 squad test also compares every table's records after the transfer. The npm package check performs a transfer through the installed package, writes the output, and rereads the destination membership.

Loading transferred files in the game has not been verified. Existing [write allocation and save-integrity limits](writing.md) still apply.
