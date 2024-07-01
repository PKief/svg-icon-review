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
 * @param config Configuration including custom name for the output file. If not provided, no file will be generated.
 */
export const generatePreview = async (fileNames: string[], config: Config) => {
  if (!config.previewFile) {
    console.log(
      red('No output file name provided. Skipping preview generation.')
    );
    return;
  }

  const darkTheme = createTheme(
    'dark',
    fileNames.filter((f) => !f.includes('_light')),
    config.bigIcon
  );
  const lightTheme = createTheme(
    'light',
    fileNames.filter(
      (f) =>
        !fileNames.some((otherFile) =>
          otherFile.includes(`${basename(f, '.svg')}_light.svg`)
        )
    ),
    config.bigIcon
  );
  const previewTemplate = `<!DOCTYPE html><head><style>${previewStyles}</style></head>
  <body><div class="theme-review">${darkTheme}${lightTheme}</div></body>
  `;

  const previewHtmlPath = join(__dirname, 'preview.html');
  writeFileSync(previewHtmlPath, previewTemplate);

  try {
    await createScreenshot(previewHtmlPath, config.previewFile);

    if (config.silent) return;
    if (config.debug) {
      console.log(previewTemplate);
    }

    console.log(
      '> SVG Icon Review:',
      green(`Successfully created preview image!`)
    );
  } catch (error) {
    throw Error(red(`Error while creating preview image`));
  }
};

const createTheme = (
  theme: Theme,
  fileNames: string[],
  bigIcon = false
): string => {
  const iconsTemplate = fileNames.reduce((acc, fileName) => {
    const iconName = basename(fileName, '.svg');
    const fullIconPath = resolve(fileName).replace(/\\/g, '/');
    const bigIconPreview = `<span class="icon-preview" style="background-image: url('${fullIconPath}')"></span><div class="divider"></div>`;

    return `${acc}
    <li class="${bigIcon ? 'with-big-icon' : ''}">
      <div class="icon ${bigIcon ? 'with-big-icon' : ''}">
        ${bigIcon ? bigIconPreview : ''}
        <span class="icon-preview-small" style="background-image: url('${fullIconPath}')"></span>
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
