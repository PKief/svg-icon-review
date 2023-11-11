import { writeFileSync } from 'fs';
import { join } from 'path';
import { green, red } from '../cli/utils';
import { previewStyles } from './styles';
import { createScreenshot } from './utils/screenshot';

/**
 * Generates a preview of dark and light theme of SVG icons.
 *
 * @param fileNames List of SVG file names
 */
export const generatePreview = async (fileNames: string[]) => {
  const darkTheme = createTheme('dark', fileNames);
  const lightTheme = createTheme('light', fileNames);
  const previewTemplate = `<!DOCTYPE html><head><style>${previewStyles}</style></head>
  <body><div class="theme-review">${darkTheme}${lightTheme}</div></body>
  `;

  const previewHtmlPath = join(__dirname, 'preview.html');
  writeFileSync(previewHtmlPath, previewTemplate);

  try {
    await createScreenshot(previewHtmlPath, 'preview');
    console.log(
      '> Material Icon Theme:',
      green(`Successfully created preview image!`)
    );
  } catch (error) {
    throw Error(red(`Error while creating  preview image`));
  }
};

const createTheme = (theme: 'light' | 'dark', fileNames: string[]): string => {
  const iconsTemplate = fileNames.reduce((acc, fileName) => {
    const iconName = fileName.split('./')[1];

    if (
      (theme === 'dark' && iconName.includes('_light')) ||
      (theme === 'light' &&
        fileNames.includes(`${iconName}_light.svg`) &&
        fileName !== `${iconName}_light.svg`)
    ) {
      return acc;
    }

    return `${acc}<li><div class="icon"><img src="../../${fileName}" alt="${iconName}" /><span class="iconName">${iconName}</span></div></li>`;
  }, '');

  return `<div class="theme-container ${theme}"><h2>${titleCase(
    theme
  )} Theme</h2><ul>${iconsTemplate}</ul></div>`;
};

const titleCase = (value: string) =>
  value
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();
