# File services

The package exposes two stateless file services with separate input contracts. Both are exported from `eafc-db-kit`. Their implementations live in separate directories; they share the binary DB reader/writer and filesystem utilities.

| Service | Input | Schema selection | Use |
| --- | --- | --- | --- |
| `FifaDatabaseService` | One standalone `.db` and its XML descriptor | Explicit XML required for every read and write | External FIFA database/XML pairs, including compatible localization databases |
| `EaFcFileService` | A squad, career save, or database | Bundled FC version/database, or the existing generic metadata contract | EA FC file and career workflows |

The service chooses a workflow; it does not infer a game's year or convert a database between FIFA and EA FC.

## FIFA database service

```ts
import { FifaDatabaseService } from 'eafc-db-kit';

const fifa = new FifaDatabaseService();
const data = await fifa.read('C:/FIFA/fifa_ng_db.db', 'C:/FIFA/fifa_ng_db-meta.xml');
const teams = data.databases[0].tables.find(table => table.name === 'teams');
console.log(teams?.records[0]);
```

| Method | Signature |
| --- | --- |
| `read` | `(databasePath, xmlPath, options?) => Promise<FifaDatabaseFile>` |
| `parse` | `(bytes, xmlText, options?) => FifaDatabaseFile` |
| `write` | `(sourceDatabasePath, xmlPath, outputPath, data, options?) => Promise<WriteFileResult>` |
| `serialize` | `(sourceBytes, xmlText, data, options?) => Uint8Array` |

`read` and `write` take an XML **path**. `parse` and `serialize` take XML **text**. The write API edits an existing binary using its matching descriptor; it does not create a database schema from XML alone. See the [FIFA guide](fifa-databases.md) for complete examples, validation, types, and supported layouts.

## EA FC file service

```ts
import { EaFcFileService } from 'eafc-db-kit';

const eaFc = new EaFcFileService();
const data = await eaFc.read('C:/saves/Squads20261010103923955', {
  version: 'FC 27',
  tables: ['players'],
});
const players = data.databases.flatMap(database => database.tables)
  .find(table => table.name === 'players');
console.log(players?.records[0]?.role9);
```

| Method | Existing API |
| --- | --- |
| `read` | `readEaFile` |
| `parse` | `parseEaFile` |
| `write` | `writeEaFile` |
| `serialize` | `serializeEaFile` |
| `readTemplate` | `readTemplateDatabase` |
| `loadMetadata` | `loadTemplateMetadata` |
| `readCareer` | `readCareerData` |
| `parseCareer` | `parseCareerData` |

These methods preserve the original functions' options, return values, and TypeScript overloads. Literal FC versions still infer the matching record types. See [FC 25](fc25-types.md), [FC 26](fc26-types.md), [FC 27](fc27-types.md), [writing](writing.md), and [career data](career-data.md).

## Instances and function exports

The package also exports ready-to-use instances, `fifaDatabaseService` and `eaFcFileService`. They do not retain paths, descriptors, or mutable session state between operations.

```ts
import { fifaDatabaseService, eaFcFileService } from 'eafc-db-kit';

const external = await fifaDatabaseService.read('C:/FIFA/custom.db', 'C:/FIFA/custom.xml');
const bundled = await eaFcFileService.readTemplate({ version: 'FC 27', tables: ['teams'] });
```

Existing top-level EA FC functions remain available. The new `readFifaDatabase`, `parseFifaDatabase`, `writeFifaDatabase`, and `serializeFifaDatabase` function exports have the same signatures as the corresponding FIFA service methods.

## Source organization

Decoded files also expose `file.transferPlayer(playerId, teamId, options?)`. This shortcut supports squads and standalone databases, requires all tables to be read, and changes data in memory before an explicit write. See [player transfers](player-transfers.md) for its contract and version-specific service organization. Career transfers are excluded.

```text
src/services/
  fifa/
    fifa-database-service.ts
    read-fifa-database.ts
    parse-fifa-database.ts
    write-fifa-database.ts
    serialize-fifa-database.ts
    database-inputs.ts
  ea-fc/
    ea-fc-file-service.ts
  file-operations/
    with-file-operations.ts
  player-transfer/
    player-transfer-service.ts
    fc25/
    fc26/
    fc27/
    fifa/
    shared/
src/domain/
  fifa-models.ts
  transfer-models.ts
src/infrastructure/
  metadata/fifa-database-metadata.ts
  binary/
  filesystem/
```

The FIFA directory owns the external-pair workflow and its validation. The EA FC service delegates to the established application functions for templates, save containers, and career sections. Shared infrastructure implements the common DB byte layout, numeric fields, strings, Huffman compression, CRCs, and atomic publication. FIFA operations do not scan for embedded save databases or modify EA FC save-integrity areas.
