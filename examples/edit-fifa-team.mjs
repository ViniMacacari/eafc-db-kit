import { FifaDatabaseService } from 'eafc-db-kit';

try {
  const args = process.argv.slice(2);
  if (args.length !== 5) {
    throw new Error('Usage: node examples/edit-fifa-team.mjs <database.db> <metadata.xml> <output.db> <team-id> <new-name>');
  }
  const [databasePath, xmlPath, outputPath, teamIdText, teamName] = args;
  const teamId = Number(teamIdText);
  if (!Number.isSafeInteger(teamId) || !teamName) throw new Error('Provide an integer team ID and a nonempty team name.');
  const service = new FifaDatabaseService();
  const data = await service.read(databasePath, xmlPath, { tables: ['teams'] });
  const teams = data.databases[0].tables.find(table => table.name === 'teams');
  const team = teams?.records.find(row => row.teamid === teamId);
  if (!team) throw new Error(`Team ${teamId} was not found in the mapped database.`);
  team.teamname = teamName;
  const result = await service.write(databasePath, xmlPath, outputPath, data);
  const reread = await service.read(result.path, xmlPath, { tables: ['teams'] });
  const written = reread.databases[0].tables.find(table => table.name === 'teams')?.records.find(row => row.teamid === teamId);
  if (written?.teamname !== teamName) throw new Error('The written team name did not match the requested value.');
  console.log(JSON.stringify({ ...result, teamId, teamName }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
