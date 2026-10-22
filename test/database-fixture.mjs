export function mappedDatabaseFixture(definitions, { big = false, padding = 4096 } = {}) {
  const metadata = { tables: definitions.map(([name, fields], i) => ({ shortName: `T${String(i).padStart(3, '0')}`, name,
    fields: fields.map((f, j) => ({ name: f.name, shortName: `F${String(j).padStart(3, '0')}`, rangeLow: f.low, rangeHigh: f.high })) })) };
  const bodies = definitions.map(([, fields, records], i) => {
    const size = fields.reduce((total, f) => total + f.width, 0) + 1;
    const bytes = Buffer.alloc(36 + fields.length * 16 + records.length * size + padding + 4);
    const i32 = (value, offset) => big ? bytes.writeInt32BE(value, offset) : bytes.writeInt32LE(value, offset);
    const u16 = (value, offset) => big ? bytes.writeUInt16BE(value, offset) : bytes.writeUInt16LE(value, offset);
    i32(size, 4); i32(size * 8 - 1, 8); u16(records.length + 10, 16); u16(records.length, 18); bytes[24] = fields.length;
    let bit = 0;
    for (const [j, field] of fields.entries()) {
      const offset = 36 + j * 16;
      i32(field.type, offset); i32(bit, offset + 4); bytes.write(metadata.tables[i].fields[j].shortName, offset + 8); i32(field.width * 8, offset + 12);
      for (const [k, row] of records.entries()) {
        const position = 36 + fields.length * 16 + k * size + bit / 8;
        if (field.type === 0) bytes.write(row[field.name], position, field.width, 'utf8');
        else if (field.type === 4) big ? bytes.writeFloatBE(row[field.name], position) : bytes.writeFloatLE(row[field.name], position);
        else i32(row[field.name] - field.low, position);
      }
      bit += field.width * 8;
    }
    return bytes;
  });
  const header = Buffer.alloc(28 + bodies.length * 8);
  const i32 = (value, offset) => big ? header.writeInt32BE(value, offset) : header.writeInt32LE(value, offset);
  header.set([0x44, 0x42, 0, 8, Number(big), 0, 0, 0]);
  i32(header.length + bodies.reduce((sum, body) => sum + body.length, 0), 8); i32(bodies.length, 16);
  let offset = 0;
  for (const [i, table] of metadata.tables.entries()) { header.write(table.shortName, 24 + i * 8); i32(offset, 28 + i * 8); offset += bodies[i].length; }
  const xml = `<database>${metadata.tables.map(t => `<table shortname="${t.shortName}" name="${t.name}"><fields>${t.fields.map(f =>
    `<field shortname="${f.shortName}" name="${f.name}" rangelow="${f.rangeLow}" rangehigh="${f.rangeHigh}" />`).join('')}</fields></table>`).join('')}</database>`;
  return { bytes: Buffer.concat([header, ...bodies]), metadata, xml };
}
