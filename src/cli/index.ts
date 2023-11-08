import minimist from 'minimist';
import { printHelp } from './commands/printHelp';
import { printResults } from './commands/printResults';
import { printVersion } from './commands/printVersion';
import { flags } from './config/options';

const run = async () => {
  const args = minimist<{
    version: undefined;
    colors: string;
    help: undefined;
  }>(process.argv.slice(2), flags);

  if (args.version) {
    printVersion();
    return;
  }
  if (args.help) {
    printHelp();
    return;
  }

  await printResults(args._);
};

try {
  run();
} catch (error) {
  console.error(error);
  process.exit(1);
}
