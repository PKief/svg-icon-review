/* eslint-disable id-blacklist */
import minimist from 'minimist';
import { Config } from '../../core';

export type CliFlags = {
  version?: boolean;
  help?: boolean;
};

const flags: minimist.Opts | undefined = {
  boolean: ['version', 'help', 'debug', 'silent'] satisfies (keyof (CliFlags &
    Config))[],
  alias: { v: 'version', h: 'help', d: 'debug', s: 'silent' },
  unknown: (a) => true,
  default: { lang: 'en' },
  '--': true,
  stopEarly: true,
};

export { flags };
