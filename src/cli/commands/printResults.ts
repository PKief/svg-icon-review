import { glob } from 'glob';
import isGlob from 'is-glob';
import { generatePreview } from '../../core';

const printResults = async (filePatterns: string[]) => {
  await getResults(filePatterns);
};

const getResults = async (filePatterns: string[]): Promise<void> => {
  const iconFileNames = [];
  for (const filePattern of filePatterns) {
    const globFiles = isGlob(filePattern)
      ? await glob(filePattern)
      : [filePattern];

    iconFileNames.push(...globFiles);
  }
  generatePreview(iconFileNames);
};

export { printResults };
