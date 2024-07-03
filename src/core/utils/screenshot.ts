import { join } from 'node:path';
import puppeteer from 'puppeteer';

/**
 * Create a screenshot from an HTML file and save it as image.
 * @param filePath Path of an HTML file
 * @param fileName Name of the output image
 */
export const createScreenshot = async (filePath: string, fileName: string) => {
  try {
    const htmlFilePath = join('file://', filePath);
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 1 });

    await page.goto(htmlFilePath);

    const themeReviewElement = await page.$('.theme-review');

    await themeReviewElement?.screenshot({
      path: `./${fileName}.png`,
      omitBackground: true,
    });

    await browser.close();
  } catch (error) {
    console.error(error);
    throw Error('Could not create screenshot for a preview');
  }
};
