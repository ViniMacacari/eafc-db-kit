# Validation

Integration tests use bundled `templates/` files without external paths. [validation.json](validation.json) records current SHA-256 checksums.

On October 22, 2026, `npm run check` passed type checking, compilation, and **164 tests**, with no failures or skipped tests, including the optional local FC 27 squad, separate FIFA database services, player transfers, player creation, and club creation. `npm run check:package` checks the installed package's runtime imports and TypeScript declarations for all three FC versions, FIFA database/XML reads and writes, file services, transfers, player/club creation, and the template, documentation, and example inventory.

| Version | Database | Bytes | Tables | Valid records |
| --- | --- | ---: | ---: | ---: |
| FC 25 | Main | 30,322,180 | 242 | 276,444 |
| FC 26 | Main | 38,563,852 | 279 | 337,434 |
| FC 25 | FUT | 30,172,220 | 210 | 250,814 |
| FC 26 | FUT | 38,118,380 | 244 | 308,211 |
| FC 25 | Localization | 6,874,244 | 2 | 95,376 |
| FC 26 | Localization | 7,273,216 | 2 | 100,057 |
| FC 27 | Main | 16,206,784 | 268 | 245,469 |
| FC 27 | FUT | 15,654,852 | 229 | 214,004 |
| FC 27 | Localization | 8,537,808 | 2 | 115,843 |

All databases were fully decoded using matching XML descriptors, with complete metadata and no warnings. The FC 27 main and FUT files preserve the supplied bytes. Its encrypted English localization source was decoded with AES-256-CBC without removing padding and bundled as a normal DB template, consistent with the older localization templates. The source files in `dev/` remain unchanged. XML comments were removed; the checksum inventory records the bundled files and the encrypted localization source separately.

## Checks

`npm run check` runs type checking, compilation, and tests covering:

- Version and database selection from the local catalog.
- External FIFA database/XML pairs, complete mappings even with filtered reads, changed XML mappings, protected outputs, and the executable team-editing example.
- Separate FIFA/EA FC service contracts and preserved literal-version inference.
- Player transfers with version-specific adapters, club/national memberships, shirt numbers, source selection, lineups, tactical player references, roles, loans, mirror links, and validation before changes are applied.
- Transfer serialization with both byte orders, standalone database/XML pairs, squad containers, JSON snapshots, and the installed npm package.
- Player creation with all 28 position profiles, deterministic defaults, automatic/manual IDs, referenced and appearance asset IDs, names, created-player registration, CP morphs, reserve sheets, active mirrors, and optional national membership.
- Selective seeded randomization, numeric ranges, explicit overrides, previews, gender, extreme ratings, unchanged input on validation failures, and creation followed by a transfer.
- Complete reads of all nine bundled databases and comparison of every binary table and field with the matching XML descriptor.
- Generated record types, metadata inference, database-specific options, and field/table differences across FC 25, FC 26, and FC 27.
- Template resolution from different working directories.
- Invalid versions, catalog traversal, and conflicting options.
- Extensionless squad and career containers with multiple databases.
- Both byte orders, bit gaps, signed integers, and rangelow adjustments.
- UTF-8 strings, short and long Huffman strings, raw strings, and empty pointers.
- Cancelled records, unused capacity, and empty-table sentinels.
- Truncated files, unknown types, limits, invalid XML, and Huffman cycles.
- I/O errors, input preservation, and field names such as `__proto__`.
- Incremental JSON and UTF-8 export without overwriting existing files.
- Binary writing with record edits, additions, deletions, and empty tables.
- Byte-identical serialization of unchanged raw and Huffman files.
- Rebuilt Huffman trees for new Unicode symbols and empty or single-symbol pools.
- Database and table CRCs checked against an independent bitwise implementation.
- Filtered writes, opaque byte preservation, standalone trailers, and fixed save allocations.
- Internal-name allocations and known save integrity areas.
- Invalid values, missing CRCs, zero-width records, cancellation flags, and combined decoding budgets.
- Exclusive output creation, explicit overwrite, failed publication, and temporary-file cleanup.
- Edited JSON import through the executable write example.
- Career section discovery, competition trees, standings ranking, fixtures resolved through standing slots, bit-packed player statistics, competition settings, season tasks, table zones, and career limits.

All nine bundled databases were edited and fully decoded again. Source template files remained byte-identical after these checks.

Template integrations are mandatory because templates are part of the project. Template changes require updating the inventory and integration expectations. The private FC 27 squad check in `test/fc27.test.mjs` runs when `dev/Squads fc27/Squads20261010103923955` exists and is otherwise skipped. Files in `dev/` are excluded from the repository and npm package.

## FIFA database/XML interoperability

The optional [C# reference checker](fifa-databases.md#tests-and-c-interoperability) compared two local pairs against the `FifaLibrary14.dll` dependency used by the supplied DB Master project. Results and SHA-256 hashes are recorded in [fifa-validation.json](fifa-validation.json).

| Database | Bytes | Tables | Valid records | Edited field |
| --- | ---: | ---: | ---: | --- |
| Main database | 30,465,772 | 242 | 277,150 | `teams.teamname` |
| Portuguese localization | 7,297,420 | 2 | 97,241 | `LanguageStrings1.sourcetext` |

For each pair, original table counts and the first/last records of every table matched the C# reader. Every record written by C# was compared with the TypeScript read. A TypeScript edit was serialized and fully read again, every returned record was compared, and the output was reopened by C# with matching counts and samples. Both source database and XML hashes matched after the completed checks. All C# save operations use temporary copies because that DLL recalculates CRCs against its loaded file path. Temporary binaries are removed.

These local pairs and the C# DLL are not bundled or required by the ordinary test suite or npm runtime. The supported shared DB signature was verified; a FIFA edition was not inferred. Interoperability checks do not establish support for every FIFA release or loading edited files in a game. See [FIFA databases](fifa-databases.md) for the exact layout and mapping contract.

## FC 27 saves

The supplied extensionless squad contains 10,844,447 bytes and one embedded database at offset 1,178, with 82 tables and 86,479 valid records. All tables decoded with complete metadata and no warnings. Unchanged serialization was byte-identical. Edits to `players.role9`, `players.wage`, and `players.releaseclause` survived serialization and a full reread; every other record was also compared. Independent CRC calculations matched both the original and edited database headers, directory, table headers, and table bodies. The source file, output length, and embedded database offset were preserved. Internal table offsets and CRCs can change when a table is rebuilt.

A mandatory synthetic career test embeds two FC 27 main databases alongside the existing career-section fixture. It checks file-based version selection, edits to FC 27 player fields, unchanged serialization, a second untouched database, database CRCs, stable database offsets, and byte-preserved career sections after writing.

No real FC 27 career save was supplied. This test covers the known container and section format with FC 27 databases; it does not establish FC 27-specific competition/statistics layouts or missing career table schemas. Several FC 26 career tables are absent from the supplied FC 27 XML, so their types are not inferred from older versions. See the [FC 27 type guide](fc27-types.md).

## Player transfers

Transfer integration tests move player `231747` from team `243` to team `1` in the bundled FC 25, FC 26, and FC 27 main databases. Each result is serialized and reread; all changed table records and the player record are compared, retained memberships are checked, and independent CRC calculations validate the output. Source database bytes remain unchanged. The optional real FC 27 squad receives the same transfer, with every table's records compared after writing and its container length and database offset preserved.

Synthetic fixtures exercise mapped FIFA `.db`/XML pairs and squad containers in both byte orders, including removal of a loan and updates to mirror links and tactical sheets. Validation tests check that errors leave the input unchanged. The package checker transfers through an installed package and verifies the written destination membership. See [player transfers](player-transfers.md) for supported tables and limits. Career transfers and loading edited transfers in the game have not been verified or enabled.

## Player creation

Creation tests insert a player into each bundled FC 25/26/27 main database, serialize it, and reread every affected table. They verify player/name/roster registrations and independent CRCs while retaining the source bytes. The optional real FC 27 squad test creates a goalkeeper, rereads every table's records, and verifies the file length, embedded database offset, and source bytes.

Synthetic fixtures cover both byte orders for standalone databases, FIFA/XML pairs, and squad containers. They exercise CP appearance records using copied donor morphs or neutral values, unique player/head IDs, explicit names, populated and inactive mirrors, reserves, national teams, previews, numeric bounds, and failures before application. The installed package checker creates a player through `FifaDatabaseService`, writes the database, and verifies the new destination link. See [player creation](player-creation.md) for the exact table policy, ID behavior, and numerical profiles. Game-engine loading and career creation are not validated.

## Club creation

Club integrations create a club with a mandatory palette, kits, league/country/stadium links, a generic manager, formations, and empty tactical sheets in each bundled FC 25/26/27 main database. They add a player with `createPlayer`, transfer an existing player to the new club, serialize, reread every table, and verify independent CRCs and preserved source bytes. The optional local FC 27 squad receives the same operations, retaining its container length and database offset.

Synthetic fixtures verify automatic/manual and referenced IDs, allocation gaps, one-to-three RGB/hex colors, invalid palettes, manual kit/formation/manager settings, female leagues, deterministic previews, active tactical/scratch mirrors, JSON restoration, atomic failures, and both byte orders for standalone database/XML and squad containers. FC 25/26 mentality blocks and FC 27 club-scoped mentality IDs are tested separately. The installed npm package check also creates a club, verifies its kits and league link after writing, and adds a player to its roster.

See [club creation](club-creation.md) for table coverage and defaults. These tests establish structural round trips, including compatibility with the existing roster shortcuts. They do not verify in-game loading, generate external badges/textures, rebuild competition schedules, or enable career club creation.

## Evidence limits

Bundled files are database/XML templates. Automated squad and career container tests use synthetic binary fixtures, plus the optional real FC 27 squad described above. Historical local FC 26 checks edited a squad, an online squad, and a career save, then re-read the resulting bytes. Source files, file lengths, and database offsets were preserved. An independent inspection also matched all **474** original table-header and table-body CRCs across those three files.

The local save files are not bundled and are not a test dependency. Loading edited saves in the game has not been verified. Encrypted containers, external compression, other version signatures, schema changes, and relocation of embedded databases are unsupported. Outer save integrity fields are invalidated or preserved according to the write option; unknown signatures are not reconstructed. See [writing](writing.md) for the exact preservation policy.
