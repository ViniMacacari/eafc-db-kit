import { PlayerTransferService, eaFcFileService, fifaDatabaseService, parseEaFile, readTemplateDatabase,
  serializeEaFile, serializeFifaDatabase, withFileOperations, writeEaFile, writeFifaDatabase,
  type EaFile, type EaFileSnapshot, type FifaDatabaseSnapshot, type FileOperations,
  type PlayerTransferProfile, type TransferPlayerOptions, type TransferPlayerResult } from '../../src/index.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

export type ReadsHaveOperations = Assert<EaFile extends FileOperations ? true : false>;
export type SnapshotsAreData = Assert<Equal<'transferPlayer' extends keyof EaFileSnapshot ? true : false, false>>;
export type PlayerArgument = Assert<Equal<Parameters<FileOperations['transferPlayer']>[0], number>>;
export type TeamArgument = Assert<Equal<Parameters<FileOperations['transferPlayer']>[1], number>>;
export type OptionsArgument = Assert<Equal<Parameters<FileOperations['transferPlayer']>[2], TransferPlayerOptions | undefined>>;
export type TransferReturn = Assert<Equal<ReturnType<FileOperations['transferPlayer']>, TransferPlayerResult>>;
export type WriteAcceptsSnapshot = Assert<Equal<Parameters<typeof writeEaFile>[2], EaFileSnapshot>>;
export type FifaWriteAcceptsSnapshot = Assert<Equal<Parameters<typeof writeFifaDatabase>[3], FifaDatabaseSnapshot>>;

export async function transferTypes(bytes: Uint8Array, xml: string, snapshot: EaFileSnapshot,
  fifaSnapshot: FifaDatabaseSnapshot) {
  const options = { fromTeamId: 243, jerseyNumber: 9, databaseIndex: 0 } satisfies TransferPlayerOptions;
  const profile: PlayerTransferProfile = 'FC 27';
  const fc25 = await readTemplateDatabase({ version: 'FC 25' });
  const result25: TransferPlayerResult = fc25.transferPlayer(231747, 1);
  const fc26 = await eaFcFileService.read('input.squad', { version: 'FC 26' });
  const result26: TransferPlayerResult = fc26.transferPlayer(231747, 1, options);
  const fc27 = await readTemplateDatabase({ version: 'FC 27' });
  const result27: TransferPlayerResult = withFileOperations(fc27, profile).transferPlayer(231747, 1);
  const players = fc27.databases[0]?.tables.find(table => table.name === 'players');
  const role: number | undefined = players?.records[0]?.role9;
  const fifa = await fifaDatabaseService.read('input.db', 'input.xml');
  const resultFifa: TransferPlayerResult = fifa.transferPlayer(231747, 1, options);
  const parsedResult: TransferPlayerResult = parseEaFile(bytes).transferPlayer(231747, 1);
  const hydrated = withFileOperations(snapshot, profile);
  const serviceResult: TransferPlayerResult = new PlayerTransferService(profile).transfer(snapshot, 231747, 1);
  const binary: Uint8Array = serializeEaFile(bytes, snapshot);
  const fifaBinary: Uint8Array = serializeFifaDatabase(bytes, xml, fifaSnapshot);
  return { result25, result26, result27, role, resultFifa, parsedResult, hydrated, serviceResult, binary, fifaBinary };
}
