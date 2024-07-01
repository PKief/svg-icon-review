import minimist from 'minimist';
import { Config } from '../../core';

export type CliFlags = {
  version?: boolean;
  help?: boolean;
  debug?: boolean;
  silent?: boolean;
  bigIcon?: boolean;
  previewFile?: string; // Allows specifying a custom name for the output file using a --preview-file flag
};

const flags: minimist.Opts | undefined = {
  boolean: [
    'version',
    'help',
    'debug',
    'silent',
    'bigIcon',
  ] satisfies (keyof (CliFlags & Config))[],
  string: [
    'previewFile',
  ],
  alias: { v: 'version', h: 'help', d: 'debug', s: 'silent', b: 'bigIcon', p: 'previewFile' },
  unknown: (a) => true,
  default: { lang: 'en' },
  '--': true,
  stopEarly: true,
};

export { flags };
