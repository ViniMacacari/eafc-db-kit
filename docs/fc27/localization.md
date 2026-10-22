# FC 27 localization: tables and fields

Generated from `templates/FC 27/loc/eng_us-meta.xml` with `npm run generate:fc27`. Do not edit this catalog by hand.

2 tables and 6 fields. See the [typed API guide](../fc27-types.md) for imports and examples.

Record type: `Fc27Record<'table-name', 'localization'>`. Field names retain the XML spelling and case.

| Table | Binary code | Fields |
| --- | --- | ---: |
| [`LanguageStrings1`](#languagestrings1) | `gFXC` | 3 |
| [`LanguageStrings2`](#languagestrings2) | `dMSI` | 3 |

## LanguageStrings1

Binary code: `gFXC`. Record type: `Fc27Record<'LanguageStrings1', 'localization'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `hashid` | `number` | `FIELDTYPE_INTEGER` | `jhKj` | 32 | -2147483648 | 2147483647 | Yes |
| `sourcetext` | `string` | `FIELDTYPE_STRING` | `ZbYb` | 64000 | 0 | 0 |  |
| `stringid` | `string` | `FIELDTYPE_STRING` | `sAhV` | 800 | 0 | 0 |  |

## LanguageStrings2

Binary code: `dMSI`. Record type: `Fc27Record<'LanguageStrings2', 'localization'>`.

| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |
| --- | --- | --- | --- | ---: | ---: | ---: | --- |
| `hashid` | `number` | `FIELDTYPE_INTEGER` | `jhKj` | 32 | -2147483648 | 2147483647 | Yes |
| `sourcetext` | `string` | `FIELDTYPE_STRING` | `ZbYb` | 64000 | 0 | 0 |  |
| `stringid` | `string` | `FIELDTYPE_STRING` | `sAhV` | 800 | 0 | 0 |  |
