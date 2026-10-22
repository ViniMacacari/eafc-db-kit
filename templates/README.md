# Local templates

Template files are included in both the project and the package. Available versions: **FC 25**, **FC 26**, and **FC 27**.

```text
templates/
  FIFA.xml
  FC 25/
    fifa_ng_db.db
    fifa_ng_db-meta.xml
    FUT/
      cards_ng_db.db
      cards_ng_db-meta.xml
    loc/
      eng_us.db
      eng_us-meta.xml
  FC 26/
    fifa_ng_db.db
    fifa_ng_db-meta.xml
    FUT/
      cards_ng_db.db
      cards_ng_db-meta.xml
    loc/
      eng_us.db
      eng_us-meta.xml
  FC 27/
    fifa_ng_db.db
    fifa_ng_db-meta.xml
    FUT/
      cards_ng_db.db
      cards_ng_db-meta.xml
    loc/
      eng_us.db
      eng_us-meta.xml
```

The collection contains nine database/XML pairs and the auxiliary `FIFA.xml` file. Main and FUT database bytes are preserved. The FC 27 English localization database is bundled in decoded DB form, matching the format of the older localization templates; its encrypted source in `dev/loc/eng_us.db` remains untouched. XML comments have been removed without changing active descriptor elements. `FIFA.xml` describes auxiliary table references and is not used as a binary descriptor by the reader.

Bundled databases can also be used as source binaries for the [write API](../docs/writing.md). Write to a new destination to keep the bundled files and their checksum inventory unchanged.

`readEaFile(path, { version: 'FC 26' })` selects the main descriptor. `readTemplateDatabase({ version: 'FC 26' })` also reads the matching bundled database. Select FUT or localization with `database: 'fut'` or `'localization'`.

Names and ranges depend on the version. The API cannot automatically detect a save from another version that reuses the same field codes. Use `SUPPORTED_VERSIONS` and `TEMPLATE_DATABASES` to inspect available options.

To add a version, include its files and update `src/domain/templates.ts`, integration tests, and the validation inventory. Current file checksums are recorded in `docs/validation.json`.

FC 25, FC 26, and FC 27 also have generated TypeScript record types and complete table/field catalogs. After changing their descriptors, run `npm run generate:fc25`, `npm run generate:fc26`, or `npm run generate:fc27`. See the [FC 25 type guide](../docs/fc25-types.md), [FC 26 type guide](../docs/fc26-types.md), and [FC 27 type guide](../docs/fc27-types.md).
