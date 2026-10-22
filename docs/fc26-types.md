# EA FC 26 TypeScript types

The FC 26 types cover every table and field in the three bundled XML descriptors. They are exported from `eafc-db-kit` and included in the npm package's declarations.

| Database | Tables | Fields | Complete catalog |
| --- | ---: | ---: | --- |
| `main` | 279 | 10,387 | [Main tables and fields](fc26/main.md) |
| `fut` | 244 | 9,425 | [FUT tables and fields](fc26/fut.md) |
| `localization` | 2 | 6 | [Localization tables and fields](fc26/localization.md) |
| Total | 525 | 19,818 | |

Tables shared between databases have separate types because their fields can differ. The totals count each table and field within its database.

## Read and search with inferred types

Pass the literal `version: 'FC 26'` to `readEaFile` or `readTemplateDatabase`. The default database is `main`. Narrow a table by its `name` to get autocomplete for its record fields:

```ts
import { readEaFile } from 'eafc-db-kit';

const save = await readEaFile('C:/saves/CmMgrC20261009', {
  version: 'FC 26',
  tables: ['players', 'teams', 'teamplayerlinks'],
});

const players = save.databases.flatMap(database => database.tables)
  .find(table => table.name === 'players');
const player = players?.records.find(record => record.playerid === 158023);

console.log(player?.playerid, player?.overallrating);

const teams = save.databases.flatMap(database => database.tables)
  .find(table => table.name === 'teams');
const club = teams?.records.find(record => record.teamid === 1);
console.log(club?.teamname);
```

The arrays and file structure remain read-only. Existing record values can be edited and the typed file can be passed directly to `writeEaFile` or `serializeEaFile`.

Missing tables and records still produce `undefined` when using `find`. A filtered read does not guarantee a requested table exists. `tables` retains support for binary short codes and arbitrary strings; an unknown filter returns no matching table, as before. Use `Fc26TableName` when you want to restrict a variable to known table names.

## Import individual record and field types

```ts
import type { Fc26Record, Fc26FieldName, Fc26TableName } from 'eafc-db-kit';

type Player = Fc26Record<'players'>;
type Team = Fc26Record<'teams'>;
type TeamPlayerLink = Fc26Record<'teamplayerlinks'>;
type FutPlayer = Fc26Record<'players', 'fut'>;
type LanguageString = Fc26Record<'LanguageStrings1', 'localization'>;

const table: Fc26TableName = 'players';
const field: Fc26FieldName<'players'> = 'overallrating';

function findPlayer(records: readonly Player[], playerId: number): Player | undefined {
  return records.find(player => player.playerid === playerId);
}
```

`Fc26Record<'players'>` provides the full row shape. `Fc26FieldName<'players'>` is the union of its exact field names. Both accept the database as their second type argument, defaulting to `main`.

The complete record maps are also public:

```ts
import type { Fc26MainRecords, Fc26FutRecords, Fc26LocalizationRecords } from 'eafc-db-kit';

type Player = Fc26MainRecords['players'];
type FutPlayer = Fc26FutRecords['players'];
type LanguageString = Fc26LocalizationRecords['LanguageStrings1'];
```

## FUT and localization

The `database` option selects the corresponding schema automatically:

```ts
import { readTemplateDatabase } from 'eafc-db-kit';

const fut = await readTemplateDatabase({ version: 'FC 26', database: 'fut', tables: ['players'] });
const cards = fut.databases.flatMap(database => database.tables)
  .find(table => table.name === 'players');
console.log(cards?.records[0]?.playerid);

const localization = await readTemplateDatabase({ version: 'FC 26', database: 'localization' });
const strings = localization.databases.flatMap(database => database.tables)
  .find(table => table.name === 'LanguageStrings1');
const entry = strings?.records.find(record => record.stringid === 'TEAMNAME_1');
console.log(entry?.sourcetext);
```

The string ID above is an example lookup; the API does not guarantee that it exists.

## Discover fields from metadata

`loadTemplateMetadata('FC 26', database?)` also returns typed table names and field names. Its result contains the XML names, binary short codes, and numeric ranges without reading the database records:

```ts
import { loadTemplateMetadata } from 'eafc-db-kit';

const metadata = await loadTemplateMetadata('FC 26');
const players = metadata.tables.find(table => table.name === 'players');

for (const field of players?.fields ?? []) {
  console.log(field.name, field.shortName, field.rangeLow, field.rangeHigh);
}
```

`Fc26MainTableCodes`, `Fc26FutTableCodes`, and `Fc26LocalizationTableCodes` map the XML table names to their binary short codes at type level. `Fc26TableShortName<Database>` exposes their union. Returned tables can be narrowed by either `name` or `shortName`; for example, the main `players` table has short code `CZUM`.

## Differences from FC 25

The FC 26 schema is generated from its own descriptors. For example, `players` includes `preferredposition7` and `role5`, and `archetypes` is a new table. These names are available in the FC 26 types and are absent from the corresponding [FC 25 schema](fc25-types.md).

```ts
import type { Fc26Record, Fc26FieldName } from 'eafc-db-kit';

type Player = Fc26Record<'players'>;
type Archetype = Fc26Record<'archetypes'>;
const field: Fc26FieldName<'players'> = 'preferredposition7';
```

Use `version: 'FC 26'` when reading these fields; selecting FC 25 keeps the FC 25 record shape.

## Value types and limits

| XML type | TypeScript value | Representation |
| --- | --- | --- |
| `DBOFIELDTYPE_INTEGER`, `FIELDTYPE_INTEGER` | `number` | Decoded integer; 0/1 flags remain numbers |
| `DBOFIELDTYPE_DATE` | `number` | Encoded numeric date; no conversion to `Date` |
| `DBOFIELDTYPE_REAL` | `number \| null` | Finite float, or `null` for NaN/infinity |
| `DBOFIELDTYPE_STRING`, `FIELDTYPE_STRING` | `string` | Decoded text, including compressed strings |

XML ranges and key attributes are listed in the catalogs. They document the descriptor and do not create numeric literal unions, foreign-key objects, or runtime validation. `XML depth` is the descriptor's bit depth; compressed strings may use a pointer in the actual binary layout. Field and table names preserve XML spelling and case, including underscores and names such as `LanguageStrings1`.

The inferred types describe the selected bundled FC 26 schema. `version` selects a descriptor and does not detect or validate the game version of a source file. Custom binary layouts may omit or add fields; use the generic `ReadFileOptions`/`EaFile` contract for those inputs. Raw reads and custom metadata keep the existing generic result types. `parseEaFile` remains generic because it accepts arbitrary bytes and descriptors. Career sections outside the databases keep their existing `CareerData` types.

For reusable options, preserve the literal version using `satisfies`:

```ts
import { readEaFile, type Fc26ReadFileOptions } from 'eafc-db-kit';

const options = { version: 'FC 26', tables: ['players'] } satisfies Fc26ReadFileOptions;
const save = await readEaFile('C:/saves/file.squad', options);
```

Other public container types are `Fc26File<Database>`, `Fc26Database<Database>`, `Fc26Table<Database>`, and `Fc26Metadata<Database>`. Their database parameter defaults to `main`. `Fc26ReadFileOptions<Database>` and `Fc26ReadTemplateOptions<Database>` describe the typed read options.

## Regenerate after editing descriptors

```sh
npm run generate:fc26
npm run typecheck
```

The generator writes `src/domain/fc26/{main,fut,localization}.ts` and the three complete catalogs in `docs/fc26/`. The source of truth is the FC 26 main, FUT, and localization metadata XMLs. `templates/FIFA.xml` describes auxiliary relationships rather than binary table schemas and does not supply record fields.

`npm run check:generated` fails when generated files are missing or differ from the descriptors. It runs as part of `typecheck` and `check`. Compiler tests cover automatic inference, invalid field names, database selection, and generic fallbacks. Integration tests compare all FC 26 XML tables and fields with the decoded binary descriptors. `check:package` also compiles a consumer against the installed npm declarations.
