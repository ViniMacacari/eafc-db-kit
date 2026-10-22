# EA FC 27 TypeScript types

The FC 27 types cover every table and field in the three bundled XML descriptors. They are exported from `eafc-db-kit` and included in the npm package's declarations.

| Database | Tables | Fields | Complete catalog |
| --- | ---: | ---: | --- |
| `main` | 268 | 9,263 | [Main tables and fields](fc27/main.md) |
| `fut` | 229 | 8,205 | [FUT tables and fields](fc27/fut.md) |
| `localization` | 2 | 6 | [Localization tables and fields](fc27/localization.md) |
| Total | 499 | 17,474 | |

Tables shared between databases have separate types because their fields can differ. The totals count each table and field within its database.

## Read and search with inferred types

Pass the literal `version: 'FC 27'` to `readEaFile` or `readTemplateDatabase`. The default database is `main`. Narrow a table by its `name` to get autocomplete for its record fields:

```ts
import { readEaFile } from 'eafc-db-kit';

const save = await readEaFile('C:/saves/Squads20261010103923955', {
  version: 'FC 27',
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

Missing tables and records still produce `undefined` when using `find`. A filtered read does not guarantee a requested table exists. `tables` retains support for binary short codes and arbitrary strings; an unknown filter returns no matching table, as before. Use `Fc27TableName` when you want to restrict a variable to known table names.

## Import individual record and field types

```ts
import type { Fc27Record, Fc27FieldName, Fc27TableName } from 'eafc-db-kit';

type Player = Fc27Record<'players'>;
type Team = Fc27Record<'teams'>;
type TeamPlayerLink = Fc27Record<'teamplayerlinks'>;
type FutPlayer = Fc27Record<'players', 'fut'>;
type LanguageString = Fc27Record<'LanguageStrings1', 'localization'>;

const table: Fc27TableName = 'players';
const field: Fc27FieldName<'players'> = 'overallrating';

function findPlayer(records: readonly Player[], playerId: number): Player | undefined {
  return records.find(player => player.playerid === playerId);
}
```

`Fc27Record<'players'>` provides the full row shape. `Fc27FieldName<'players'>` is the union of its exact field names. Both accept the database as their second type argument, defaulting to `main`.

The complete record maps are also public:

```ts
import type { Fc27MainRecords, Fc27FutRecords, Fc27LocalizationRecords } from 'eafc-db-kit';

type Player = Fc27MainRecords['players'];
type FutPlayer = Fc27FutRecords['players'];
type LanguageString = Fc27LocalizationRecords['LanguageStrings1'];
```

## FUT and localization

The `database` option selects the corresponding schema automatically:

```ts
import { readTemplateDatabase } from 'eafc-db-kit';

const fut = await readTemplateDatabase({ version: 'FC 27', database: 'fut', tables: ['players'] });
const cards = fut.databases.flatMap(database => database.tables)
  .find(table => table.name === 'players');
console.log(cards?.records[0]?.playerid);

const localization = await readTemplateDatabase({ version: 'FC 27', database: 'localization' });
const strings = localization.databases.flatMap(database => database.tables)
  .find(table => table.name === 'LanguageStrings1');
const entry = strings?.records.find(record => record.stringid === 'TEAMNAME_1');
console.log(entry?.sourcetext);
```

The string ID above is an example lookup; the API does not guarantee that it exists.

## Discover fields from metadata

`loadTemplateMetadata('FC 27', database?)` also returns typed table names and field names. Its result contains the XML names, binary short codes, and numeric ranges without reading the database records:

```ts
import { loadTemplateMetadata } from 'eafc-db-kit';

const metadata = await loadTemplateMetadata('FC 27');
const players = metadata.tables.find(table => table.name === 'players');

for (const field of players?.fields ?? []) {
  console.log(field.name, field.shortName, field.rangeLow, field.rangeHigh);
}
```

`Fc27MainTableCodes`, `Fc27FutTableCodes`, and `Fc27LocalizationTableCodes` map the XML table names to their binary short codes at type level. `Fc27TableShortName<Database>` exposes their union. Returned tables can be narrowed by either `name` or `shortName`; for example, the main `players` table has short code `CZUM`.

## Differences from FC 26

The FC 27 schema is generated from the supplied FC 27 descriptors. The main and FUT `players` tables add `role6` through `role9`, `wage`, `releaseclause`, and `growthprofile`. New main tables include `vipplayers` and `multiclubownership`. These additions are absent from the corresponding [FC 26 schema](fc26-types.md).

```ts
import type { Fc27Record, Fc27FieldName } from 'eafc-db-kit';

type Player = Fc27Record<'players'>;
type VipPlayer = Fc27Record<'vipplayers'>;
const field: Fc27FieldName<'players'> = 'role9';
```

Some FC 26 tables, including `career_managerinfo`, `career_users`, and `career_playercontract`, are absent from the supplied FC 27 main descriptor. The FC 27 types retain the actual XML schema and do not copy these tables from older versions.

## Squad and career compatibility

The supplied FC 27 squad was fully decoded with complete metadata and no warnings. Unchanged serialization preserved every byte. Edits to `role9`, `wage`, and `releaseclause` were serialized and decoded again while preserving the source file and embedded database offset.

Career database reads use `readEaFile(path, { version: 'FC 27' })`. The existing `readCareerData` API handles sections outside the databases independently of the selected XML. A synthetic career combines FC 27 databases with the existing career-section fixture to test reading, editing, multiple databases, and section preservation.

No real FC 27 career save was available. The synthetic test does not confirm FC 27-specific career-section layouts or fields absent from the supplied descriptors. Loading edited saves in the game has not been verified. See [validation](validation.md) for the scope of these checks.

## Value types and limits

| XML type | TypeScript value | Representation |
| --- | --- | --- |
| `DBOFIELDTYPE_INTEGER`, `FIELDTYPE_INTEGER` | `number` | Decoded integer; 0/1 flags remain numbers |
| `DBOFIELDTYPE_DATE` | `number` | Encoded numeric date; no conversion to `Date` |
| `DBOFIELDTYPE_REAL` | `number \| null` | Finite float, or `null` for NaN/infinity |
| `DBOFIELDTYPE_STRING`, `FIELDTYPE_STRING` | `string` | Decoded text, including compressed strings |

XML ranges and key attributes are listed in the catalogs. They document the descriptor and do not create numeric literal unions, foreign-key objects, or runtime validation. `XML depth` is the descriptor's bit depth; compressed strings may use a pointer in the actual binary layout. Field and table names preserve XML spelling and case, including underscores and names such as `LanguageStrings1`.

The inferred types describe the selected bundled FC 27 schema. `version` selects a descriptor and does not detect or validate the game version of a source file. Custom binary layouts may omit or add fields; use the generic `ReadFileOptions`/`EaFile` contract for those inputs. Raw reads and custom metadata keep the existing generic result types. `parseEaFile` remains generic because it accepts arbitrary bytes and descriptors. Career sections outside the databases keep their existing `CareerData` types.

For reusable options, preserve the literal version using `satisfies`:

```ts
import { readEaFile, type Fc27ReadFileOptions } from 'eafc-db-kit';

const options = { version: 'FC 27', tables: ['players'] } satisfies Fc27ReadFileOptions;
const save = await readEaFile('C:/saves/file.squad', options);
```

Other public container types are `Fc27File<Database>`, `Fc27Database<Database>`, `Fc27Table<Database>`, and `Fc27Metadata<Database>`. Their database parameter defaults to `main`. `Fc27ReadFileOptions<Database>` and `Fc27ReadTemplateOptions<Database>` describe the typed read options.

## Regenerate after editing descriptors

```sh
npm run generate:fc27
npm run typecheck
```

The generator writes `src/domain/fc27/{main,fut,localization}.ts` and the three complete catalogs in `docs/fc27/`. The source of truth is the FC 27 main, FUT, and localization metadata XMLs. `templates/FIFA.xml` describes auxiliary relationships rather than binary table schemas and does not supply record fields.

`npm run check:generated` fails when generated files are missing or differ from the descriptors. It runs as part of `typecheck` and `check`. Compiler tests cover automatic inference, invalid field names, database selection, and generic fallbacks. Integration tests compare all FC 27 XML tables and fields with the decoded binary descriptors. `check:package` also compiles a consumer against the installed npm declarations.
