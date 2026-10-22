import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { XMLParser, XMLValidator } from 'fast-xml-parser';

const root = fileURLToPath(new URL('../', import.meta.url));
const check = process.argv.includes('--check');
assert.ok(process.argv.slice(2).every(arg => arg === '--check'), 'Only --check is supported.');
const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '', parseAttributeValue: false,
  parseTagValue: false, trimValues: true });
const databases = [
  { name: 'main', title: 'Main', source: 'fifa_ng_db-meta.xml' },
  { name: 'fut', title: 'Fut', source: 'FUT/cards_ng_db-meta.xml' },
  { name: 'localization', title: 'Localization', source: 'loc/eng_us-meta.xml' },
];
const array = value => Array.isArray(value) ? value : [value];
const byName = (a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
const code = value => `\`${String(value).replaceAll('|', '\\|').replaceAll('`', '\\`')}\``;
const stale = [];

function fieldType(field) {
  let type;
  if (/^(?:DBO)?FIELDTYPE_(?:INTEGER|DATE)$/.test(field.type)) type = 'number';
  else if (/^(?:DBO)?FIELDTYPE_REAL$/.test(field.type)) type = 'number | null';
  else if (/^(?:DBO)?FIELDTYPE_STRING$/.test(field.type)) type = 'string';
  else throw new Error(`Unsupported XML field type: ${field.type}`);
  if (field.null === 'True' && !type.includes('null')) type += ' | null';
  return type;
}

async function output(path, content) {
  const destination = join(root, path);
  if (check) {
    const actual = await readFile(destination, 'utf8').catch(error => {
      if (error.code === 'ENOENT') return null;
      throw error;
    });
    if (actual !== content) stale.push(path);
  } else {
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, content, 'utf8');
  }
}

for (const database of databases) {
  const source = `templates/FC 25/${database.source}`;
  const xml = await readFile(join(root, source), 'utf8');
  assert.equal(XMLValidator.validate(xml), true, `Invalid XML: ${source}`);
  const tables = array(parser.parse(xml).database.table).map(table => ({
    name: table.name,
    shortName: table.shortname,
    fields: array(table.fields.field).sort(byName),
  })).sort(byName);
  assert.equal(new Set(tables.map(table => table.name)).size, tables.length, 'Duplicate table names.');
  const prefix = `Fc25${database.title}`;
  const lines = [
    `// Generated from ${source}. Do not edit by hand.`,
    '// Regenerate with npm run generate:fc25.',
    '',
    `export type ${prefix}Records = {`,
  ];
  for (const table of tables) {
    assert.equal(new Set(table.fields.map(field => field.name)).size, table.fields.length,
      `Duplicate fields in ${table.name}.`);
    lines.push(`  ${JSON.stringify(table.name)}: {`);
    for (const field of table.fields) lines.push(`    ${JSON.stringify(field.name)}: ${fieldType(field)};`);
    lines.push('  };');
  }
  lines.push('};', '', `export type ${prefix}TableCodes = {`);
  for (const table of tables) lines.push(`  ${JSON.stringify(table.name)}: ${JSON.stringify(table.shortName)};`);
  lines.push('};', '');
  await output(`src/domain/fc25/${database.name}.ts`, lines.join('\n'));

  const fieldCount = tables.reduce((count, table) => count + table.fields.length, 0);
  const docs = [
    `# FC 25 ${database.name}: tables and fields`,
    '',
    `Generated from ${code(source)} with ${code('npm run generate:fc25')}. Do not edit this catalog by hand.`,
    '',
    `${tables.length} tables and ${fieldCount.toLocaleString('en-US')} fields. See the [typed API guide](../fc25-types.md) for imports and examples.`,
    '',
    `Record type: ${code(`Fc25Record<'table-name', '${database.name}'>`)}. Field names retain the XML spelling and case.`,
    '',
    '| Table | Binary code | Fields |',
    '| --- | --- | ---: |',
  ];
  for (const table of tables) {
    docs.push(`| [${code(table.name)}](#${table.name.toLowerCase()}) | ${code(table.shortName)} | ${table.fields.length} |`);
  }
  for (const table of tables) {
    docs.push('', `## ${table.name}`, '',
      `Binary code: ${code(table.shortName)}. Record type: ${code(`Fc25Record<'${table.name}', '${database.name}'>`)}.`, '',
      '| Field | TypeScript | XML type | Binary code | XML depth | Minimum | Maximum | Key |',
      '| --- | --- | --- | --- | ---: | ---: | ---: | --- |');
    for (const field of table.fields) {
      docs.push(`| ${code(field.name)} | ${code(fieldType(field))} | ${code(field.type)} | ${code(field.shortname)} | ${field.depth} | ${field.rangelow} | ${field.rangehigh ?? '—'} | ${field.key === 'True' ? 'Yes' : ''} |`);
    }
  }
  docs.push('');
  await output(`docs/fc25/${database.name}.md`, docs.join('\n'));
  console.log(`${database.name}: ${tables.length} tables, ${fieldCount} fields.`);
}

if (stale.length > 0) {
  throw new Error(`Generated FC 25 files are missing or stale: ${stale.join(', ')}. Run npm run generate:fc25.`);
}
console.log(check ? 'FC 25 generated types and catalogs are current.' : 'FC 25 types and catalogs generated.');
