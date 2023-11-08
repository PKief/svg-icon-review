import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { green, red } from '../cli/utils';
import { createScreenshot } from './utils/screenshot';

/**
 * Generates
 *
 * @param fileNames List of SVG file names
 */
export const generatePreview = async (fileNames: string[]) => {
  const previewFilePath = join('/demo/preview.html');
  const previewFile = readFileSync(previewFilePath, 'utf8');

  const placeholder = '{{icons}}';
  const iconTemplate = fileNames.reduce((acc, fileName) => {
    const iconName = fileName.split('.')[0];
    return `${acc}<li><div class="icon"><img src="./icons/${fileName}" alt="${iconName}" /><span class="iconName">${iconName}</span></div></li>`;
  }, '');
  const finalTemplate = previewFile.replaceAll(placeholder, iconTemplate);
  writeFileSync(previewFilePath + '_final.html', finalTemplate);

  try {
    await createScreenshot(previewFilePath + '_final.html', 'preview');
    console.log(
      '> Material Icon Theme:',
      green(`Successfully created preview image!`)
    );
  } catch (error) {
    throw Error(red(`Error while creating  preview image`));
  }
};
