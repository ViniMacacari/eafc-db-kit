# FIFA databases with external XML descriptors

`FifaDatabaseService` reads and writes standalone FIFA `.db` files using the XML descriptor supplied by the caller. Every operation requires both the original database and its mapping. It uses the DB layout also read by DB Master's `FifaLibrary.DbFile(databasePath, xmlPath)`; no C# runtime or DLL is required by the library.

For squads, career saves, or bundled FC templates, use [EaFcFileService](services.md). The original top-level EA FC functions remain available.

## Read a database

```ts
import { FifaDatabaseService } from 'eafc-db-kit';

const fifa = new FifaDatabaseService();
const source = 'C:/FIFA/data/db/fifa_ng_db.db';
const descriptor = 'C:/FIFA/data/db/fifa_ng_db-meta.xml';

const data = await fifa.read(source, descriptor, {
  tables: ['players', 'teams', 'teamplayerlinks'],
});

const database = data.databases[0];
const players = database.tables.find(table => table.name === 'players');
const player = players?.records.find(record => record.playerid === 231747);
console.log(player?.overallrating);

const teams = database.tables.find(table => table.name === 'teams');
const club = teams?.records.find(record => record.teamid === 1);
console.log(club?.teamname);
```

Paths can be absolute or relative to the process's working directory. The service opens both inputs read-only. It does not search for an XML beside the `.db`, choose bundled FC metadata, or infer the FIFA edition from a filename. Use the descriptor distributed with the specific database being edited. An auxiliary relationships file such as `FIFA.xml` is not a database field descriptor.

Omit `tables` to decode all tables. Filters accept XML names or four-character binary short codes. Unknown filters return no selected tables; an empty filter array is invalid. `tableCount` retains the full database directory count. Input validation still requires XML mappings for every binary table and field, including unselected tables. Filtering reduces record decoding and does not permit incomplete descriptors.

## Edit and write a new database

For a club transfer, read the complete file without `tables`, call `data.transferPlayer(playerId, teamId)`, and write it using the same database/XML pair. See [player transfers](player-transfers.md) for source-club selection, shirt numbers, lineup updates, and supported schemas.

```ts
import { FifaDatabaseService } from 'eafc-db-kit';

const fifa = new FifaDatabaseService();
const source = 'C:/FIFA/data/db/fifa_ng_db.db';
const descriptor = 'C:/FIFA/data/db/fifa_ng_db-meta.xml';
const output = 'C:/FIFA/data/db/fifa_ng_db-edited.db';

const data = await fifa.read(source, descriptor, { tables: ['teams'] });
const teams = data.databases[0].tables.find(table => table.name === 'teams');
const club = teams?.records.find(record => record.teamid === 1);
if (!club) throw new Error('Team 1 was not found.');

club.teamname = 'Arsenal Test';

const result = await fifa.write(source, descriptor, output, data);
const written = await fifa.read(result.path, descriptor, { tables: ['teams'] });
const writtenClub = written.databases[0].tables.find(table => table.name === 'teams')
  ?.records.find(record => record.teamid === 1);
console.log(writtenClub?.teamname);
```

The argument order is **source database, XML descriptor, output database, data, options**. Writing reloads both original inputs and validates the supplied mapping before encoding. Returned paths are absolute. Output parent directories must already exist.

Existing output files are protected by default. To replace a destination explicitly:

```ts
await fifa.write(source, descriptor, output, data, { overwrite: true });
```

Replacing the source `.db` also requires `overwrite: true`. The output cannot be the XML descriptor path, even when overwriting is enabled. The service never generates or rewrites XML. Inputs and existing destinations remain untouched if validation or encoding fails. Completed bytes are published through the same [atomic file writer](writing.md#file-workflow) as the EA FC API, including its filesystem requirements and concurrency limitations.

After a write, read the resulting file again before making further edits. Table offsets, CRCs, row counts, and compressed pools may have changed; an earlier snapshot still describes the original binary.

## Work with bytes and XML text

```ts
import { readFile, writeFile } from 'node:fs/promises';
import { FifaDatabaseService } from 'eafc-db-kit';

const fifa = new FifaDatabaseService();
const original = await readFile('C:/FIFA/custom.db');
const xml = await readFile('C:/FIFA/custom.xml', 'utf8');
const data = fifa.parse(original, xml, { tables: ['teams'] });

const teams = data.databases[0].tables.find(table => table.name === 'teams');
const club = teams?.records.find(record => record.teamid === 1);
if (!club) throw new Error('Team 1 was not found.');
club.teamname = 'Arsenal Test';

const encoded = fifa.serialize(original, xml, data);
await writeFile('C:/FIFA/custom-edited.db', encoded, { flag: 'wx' });
```

`parse` and `serialize` are synchronous and perform no I/O. They take XML text, not an XML path or a pre-parsed metadata object. Serialization returns a new `Uint8Array` and preserves the supplied source bytes. As with the EA FC API, CPU-heavy decoding runs on the calling thread; applications can use workers for large inputs.

## Types and JSON

The public contracts are `FifaDatabaseFile`, `FifaParseOptions`, `FifaReadOptions`, `FifaSerializeOptions`, `FifaWriteOptions`, and the shared `WriteFileResult`.

`FifaDatabaseFile` uses the existing JSON-compatible file structure and adds `format: 'fifa-db'`. It has one database, `container: 'database'`, `source.kind: 'database'`, `inGameName: null`, and `metadataComplete: true`. A missing mapping produces an error instead of returning partially named fields. A generic `EaFile` or EA FC save snapshot cannot be passed directly to the FIFA writer; read it through the FIFA service with its XML first.

External XML is supplied at runtime, so its names cannot create TypeScript literal unions at compile time. Rows use `EaRecord`, with `string | number | null` values. Reading an optional property can also produce `undefined`. Check the value's type when using it as a number or string:

```ts
const rating = player?.overallrating;
if (typeof rating === 'number') {
  console.log(rating + 1);
}
```

Bundled EA FC record types remain version-specific through `EaFcFileService`. Selecting an external descriptor does not assert that it matches an `Fc25Record`, `Fc26Record`, or `Fc27Record` shape.

Rows are mutable; structural properties and record arrays are read-only in TypeScript. To add or delete records, create a new snapshot with updated arrays:

```ts
const database = data.databases[0];
const teams = database.tables.find(table => table.name === 'teams');
if (!teams) throw new Error('The teams table was not found.');

const edited = {
  ...data,
  databases: [{
    ...database,
    tables: database.tables.map(table => table === teams
      ? { ...table, records: table.records.filter(row => row.teamid !== 1) }
      : table),
  }] as const,
};

await fifa.write(source, descriptor, output, edited);
```

New rows must contain exactly the declared fields. The writer does not check foreign-key relationships or whether deleting a team is valid for the game. A JSON round trip retains the snapshot contract, including its `format` discriminator; treat JSON imports as edits to the original binary, not an independent schema.

## Descriptor validation

XML descriptors use `table` and `field` elements with `name`, four-byte ASCII `shortname`, `rangelow`, and optional `rangehigh`. Attributes and child elements are supported by the shared metadata parser. Files are decoded as UTF-8; XML comments and a UTF-8 BOM are accepted. DTDs and entity declarations are rejected.

The service validates all binary table/field codes against the descriptor before record decoding. Duplicate table names, duplicate codes, duplicate field names within a table, invalid signed 32-bit ranges, missing tables, and missing fields are rejected. Extra XML definitions are permitted when their names and ranges are valid; they do not add binary tables or columns.

When writing, table names, field names, and range metadata must still match the supplied XML. Binary type codes, bit offsets, depths, field counts, and record allocations come from the original `.db`; editing them in the snapshot is rejected. The service does not modify the binary schema to match an edited XML.

A descriptor with matching codes can still describe a different edition's meanings or ranges. The DB signature contains no reliable game-year identifier; code coverage cannot prove that a descriptor belongs to a particular release.

## Values and layout support

| Binary field code | Returned value | Write behavior |
| --- | --- | --- |
| `0` | UTF-8 string | Must fit the original fixed-width byte allocation; no embedded NUL |
| `3` | Number | Integer decoded with XML `rangelow`; must fit the original integer field when written |
| `4` | Number or `null` | Float32; non-finite input is represented as `null` with a warning; unchanged bits are preserved |
| `13` | String | Short compressed/raw string; rebuilt pool, maximum 255 encoded bytes |
| `14` | String | Long compressed/raw string; rebuilt pool, maximum 65,535 encoded bytes |

Numeric dates remain encoded numbers. Numeric flags remain numbers. `rangehigh` is descriptor metadata rather than a separate edit validator; integer writes enforce the stored bit width and signed 32-bit representation after the XML offset. Finite floats retain float32 precision. Only unchanged non-finite float values can remain `null` on output.

Both supported byte orders, cancelled records, raw and Huffman strings, record insertion/deletion, and database/table CRC updates use the shared codec. Cancelled rows are omitted from returned records and can be removed when a table is rebuilt. The standalone database can grow or shrink; bytes after its declared boundary are preserved as an opaque trailer. Filtered writes preserve unselected tables' contents, although table locations and CRCs can change when the database is rebuilt.

Supported inputs start at offset zero with `44 42 00 08`, followed by the supported PC/little-endian or Xbox/big-endian platform flag. A `.db` extension alone does not establish support. Save containers with embedded databases, encrypted files, archives, external compression, SQLite databases, unknown signatures, unsupported field codes, schema changes, and automatic DB Master-style schema expansion are outside this service's contract. Extract and decode a supported standalone database before passing it to the service. Edited outputs have not been tested inside a game.

## Options, limits, and errors

| Operation | Options |
| --- | --- |
| `read`, `parse` | `fileName`, `tables`, `limits` |
| `write` | `overwrite`, `limits` |
| `serialize` | `limits` |

EA FC-specific options such as `version`, `database`, `metadata`, `kind`, and `saveIntegrity` are rejected by the FIFA service. `fileName` only changes the reported source label.

`limits` uses the shared `ReadLimits` contract. `maxFileBytes` applies individually to the database, XML input, and encoded output. Record/value/string budgets apply to the records actually decoded or encoded; filtering does not bypass full descriptor coverage. See [default limits](../README.md#public-api-and-errors).

Failures use `EaFileError`, consistent with the rest of the package:

| Code | Example |
| --- | --- |
| `INVALID_OPTIONS` | Missing XML path, unsupported service option, invalid filter, output targeting the descriptor |
| `FILE_READ_FAILED` | Database or XML cannot be opened |
| `INVALID_METADATA` | Malformed XML, invalid UTF-8/ranges, ambiguous names, incomplete mapping |
| `INVALID_FORMAT` / `TRUNCATED_FILE` | Unsupported DB header or out-of-bounds data |
| `UNSUPPORTED_FIELD_TYPE` / `INVALID_COMPRESSED_STRING` | Unsupported field or invalid string data |
| `INVALID_WRITE` | Edited schema/mapping, missing row fields, incompatible values, wrong snapshot kind |
| `FILE_WRITE_FAILED` | Existing destination, unavailable output directory, filesystem publication failure |
| `LIMIT_EXCEEDED` | Input, output, or decoding exceeds configured budgets |

## Runnable example

From a source checkout, build once and run the team-editing example with an explicit output:

```powershell
npm run build
node examples/edit-fifa-team.mjs `
  'C:/FIFA/fifa_ng_db.db' `
  'C:/FIFA/fifa_ng_db-meta.xml' `
  'C:/FIFA/fifa_ng_db-edited.db' `
  1 'Arsenal Test'
```

The example filters the `teams` table, updates one team, writes a new `.db`, reopens it with the same XML, and checks the name. It refuses to overwrite an existing output. No local installation directory is built into the library.

## Tests and C# interoperability

`npm run check` covers the external-pair API, metadata coverage, tampered mappings, independent CRCs, both byte orders, raw/Huffman text, edits/additions/deletions, input preservation, limits, exclusive publication, service separation, and existing EA FC behavior. Package checks install and exercise the services from the actual npm tarball.

The optional reference check uses the `FifaLibrary14.dll` dependency of the supplied DB Master C# project:

```powershell
npm run build
node scripts/check-fifa-reference.mjs `
  'C:/FIFA/fifa_ng_db.db' `
  'C:/FIFA/fifa_ng_db-meta.xml' `
  'C:/Program Files (x86)/Fifa Master/DB Master/FifaLibrary14.dll'
```

`npm run check:fifa-reference -- <db> <xml> <dll>` invokes the same checker when the configured npm shell preserves argument quoting. Direct `node` invocation is useful for Windows paths containing spaces.

This development-only check compares every table's count and first/last records with C#, reads a database written by C# and compares every returned record, then edits a field through TypeScript, checks every record again, and reopens the TypeScript output with C#. It requires a main database containing `teams` or a localization database containing `LanguageStrings1`. All C# calls use isolated copies: the reference DLL can update its loaded database when recalculating CRCs, so the checker never asks it to save against a caller's input. Temporary outputs are removed and both original input hashes are checked. The DLL, PowerShell helper, and reference checker are not npm runtime dependencies. See [validation](validation.md) for recorded results and evidence limits.
