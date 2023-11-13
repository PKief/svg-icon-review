import minimist from 'minimist';
import { Config } from '../core';
import { printHelp } from './commands/printHelp';
import { printResults } from './commands/printResults';
import { printVersion } from './commands/printVersion';
import { CliFlags, flags } from './config/flags';

const run = async () => {
  const args = minimist<Partial<CliFlags & Config>>(
    process.argv.slice(2),
    flags
  );

  if (args.version) {
    printVersion();
    return;
  }
  if (args.help) {
    printHelp();
    return;
  }

  await printResults(args._, {
    debug: args.debug ?? false,
    silent: args.silent ?? false,
  });
};

try {
  run();
} catch (error) {
  console.error(error);
  process.exit(1);
}
