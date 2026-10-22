import assert from 'node:assert/strict';

function crc(bytes) {
  let value = 0xffffffff;
  for (const byte of bytes) {
    value ^= byte << 24;
    for (let bit = 0; bit < 8; bit++) value = (value << 1) ^ ((value & 0x80000000) ? 0x04c11db7 : 0);
  }
  return value >>> 0;
}

export function assertCrcs(bytes, database) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const little = database.endianness === 'little';
  const start = database.offset, end = start + database.byteLength;
  const base = start + 28 + database.tableCount * 8;
  assert.equal(view.getUint32(start + 20, little), crc(bytes.subarray(start, start + 20)));
  assert.equal(view.getUint32(base - 4, little), crc(bytes.subarray(start + 24, base - 4)));
  const offsets = Array.from({ length: database.tableCount }, (_, index) => base + view.getUint32(start + 28 + index * 8, little)).sort((a, b) => a - b);
  for (const [index, offset] of offsets.entries()) {
    const tableEnd = offsets[index + 1] ?? end;
    assert.equal(view.getUint32(offset + 32, little), crc(bytes.subarray(offset, offset + 32)));
    assert.equal(view.getUint32(tableEnd - 4, little), crc(bytes.subarray(offset + 36, tableEnd - 4)));
  }
}

assert.equal(crc(Buffer.from('123456789')), 0x0376e6e7);

