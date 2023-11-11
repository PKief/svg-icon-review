import glob from 'glob';
import isGlob from 'is-glob';
import { promisify } from 'util';
import { generatePreview } from '../../core';
import { Results } from '../../core/models';

const printResults = async (filePatterns: string[]) => {
  await getResults(filePatterns);
};

const getResults = async (filePatterns: string[]): Promise<Results> => {
  const result: Results = {
    invalidColorResults: [],
    base64Results: [],
    invalidSvgResults: [],
  };

  for (const filePattern of filePatterns) {
    const globFiles = isGlob(filePattern)
      ? await promisify(glob)(filePattern)
      : [filePattern];

    generatePreview(globFiles);
  }
  return result;
};

export { printResults };
