# Validation

Integration tests use bundled `templates/` files without external paths. [validation.json](validation.json) records current SHA-256 checksums.

On October 22, 2026, `npm run check` passed type checking, compilation, and **80 tests**, with no failures or skipped tests, including the optional local FC 27 squad. `npm run check:package` verified the installed package's runtime imports and TypeScript declarations for all three versions, alongside the template, documentation, and example inventory.

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

## FC 27 saves

The supplied extensionless squad contains 10,844,447 bytes and one embedded database at offset 1,178, with 82 tables and 86,479 valid records. All tables decoded with complete metadata and no warnings. Unchanged serialization was byte-identical. Edits to `players.role9`, `players.wage`, and `players.releaseclause` survived serialization and a full reread; every other record was also compared. Independent CRC calculations matched both the original and edited database headers, directory, table headers, and table bodies. The source file, output length, and embedded database offset were preserved. Internal table offsets and CRCs can change when a table is rebuilt.

A mandatory synthetic career test embeds two FC 27 main databases alongside the existing career-section fixture. It checks file-based version selection, edits to FC 27 player fields, unchanged serialization, a second untouched database, database CRCs, stable database offsets, and byte-preserved career sections after writing.

No real FC 27 career save was supplied. This test covers the known container and section format with FC 27 databases; it does not establish FC 27-specific competition/statistics layouts or missing career table schemas. Several FC 26 career tables are absent from the supplied FC 27 XML, so their types are not inferred from older versions. See the [FC 27 type guide](fc27-types.md).

## Evidence limits

Bundled files are database/XML templates. Automated squad and career container tests use synthetic binary fixtures, plus the optional real FC 27 squad described above. Historical local FC 26 checks edited a squad, an online squad, and a career save, then re-read the resulting bytes. Source files, file lengths, and database offsets were preserved. An independent inspection also matched all **474** original table-header and table-body CRCs across those three files.

The local save files are not bundled and are not a test dependency. Loading edited saves in the game has not been verified. Encrypted containers, external compression, other version signatures, schema changes, and relocation of embedded databases are unsupported. Outer save integrity fields are invalidated or preserved according to the write option; unknown signatures are not reconstructed. See [writing](writing.md) for the exact preservation policy.
