import minimist from 'minimist';
import { Config } from '../../core';

export type CliFlags = {
  version?: boolean;
  help?: boolean;
  debug?: boolean;
  silent?: boolean;
  bigIcon?: boolean;
};

const flags: minimist.Opts | undefined = {
  boolean: [
    'version',
    'help',
    'debug',
    'silent',
    'bigIcon',
  ] satisfies (keyof (CliFlags & Config))[],
  alias: { v: 'version', h: 'help', d: 'debug', s: 'silent', b: 'bigIcon' },
  unknown: (a) => true,
  default: { lang: 'en' },
  '--': true,
  stopEarly: true,
};

export { flags };
