import isGlob from 'is-glob';
import { generatePreview } from '../../core';
import { globAsync } from '../../core/async';
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
      ? await globAsync(filePattern)
      : [filePattern];

    generatePreview(globFiles);
  }
  return result;
};

export { printResults };
