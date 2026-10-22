import type { EaDatabase, EaFile, ReadLimits } from './models.js';

export interface FifaDatabaseFile extends EaFile {
  readonly format: 'fifa-db';
  readonly source: EaFile['source'] & { readonly kind: 'database' };
  readonly container: 'database';
  readonly inGameName: null;
  readonly metadataComplete: true;
  readonly databases: readonly [EaDatabase];
}

export interface FifaParseOptions {
  readonly fileName?: string;
  readonly tables?: readonly string[];
  readonly limits?: Partial<ReadLimits>;
}

export type FifaReadOptions = FifaParseOptions;

export interface FifaSerializeOptions {
  readonly limits?: Partial<ReadLimits>;
}

export interface FifaWriteOptions extends FifaSerializeOptions {
  readonly overwrite?: boolean;
}
