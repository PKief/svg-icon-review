import { writeFileSync } from 'fs';
import { basename, join, resolve } from 'path';
import { green, red } from '../cli/utils';
import { Config, Theme } from './models';
import { previewStyles } from './styles';
import { createScreenshot } from './utils/screenshot';

/**
 * Generates a preview of dark and light theme of SVG icons.
 *
 * @param fileNames List of SVG file names
 */
export const generatePreview = async (fileNames: string[], config: Config) => {
  const darkTheme = createTheme(
    'dark',
    fileNames.filter((f) => !f.includes('_light'))
  );
  const lightTheme = createTheme(
    'light',
    fileNames.filter(
      (f) =>
        !fileNames.some((otherFile) =>
          otherFile.includes(`${basename(f, '.svg')}_light.svg`)
        )
    )
  );
  const previewTemplate = `<!DOCTYPE html><head><style>${previewStyles}</style></head>
  <body><div class="theme-review">${darkTheme}${lightTheme}</div></body>
  `;

  const previewHtmlPath = join(__dirname, 'preview.html');
  writeFileSync(previewHtmlPath, previewTemplate);

  try {
    await createScreenshot(previewHtmlPath, 'preview');

    if (config.silent) return;
    if (config.debug) {
      console.log(previewTemplate);
    }

    console.log(
      '> SVG Icon Review:',
      green(`Successfully created preview image!`)
    );
  } catch (error) {
    throw Error(red(`Error while creating  preview image`));
  }
};

const createTheme = (theme: Theme, fileNames: string[]): string => {
  const iconsTemplate = fileNames.reduce((acc, fileName) => {
    const iconName = basename(fileName, '.svg');
    const fullIconPath = resolve(fileName).replace(/\\/g, '/');

    return `${acc}
    <li>
      <div class="icon">
        <span class="icon-preview" style="background-image: url('${fullIconPath}')"></span>
        <div class="divider"></div>
        <span class="icon-preview-small" style="background-image: url('C:/Projects/svg-icon-review/logo.svg');"></span>
        <span class="iconName">${iconName}</span>
      </div>
    </li>`;
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
