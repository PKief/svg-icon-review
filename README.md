<h1 align="center">
  <br>
    <img src="https://github.com/PKief/vscode-icon-theme-reviewer/raw/main/logo.png" alt="logo" width="200">
  <br><br>
  SVG Color Linter
  <br>
  <br>
</h1>

<h4 align="center">Linting tool to check if SVG files only use colors of a given color palette.</h4>

## CLI Command

The tool can be executed with this command:

```
npx vscode-icon-theme-reviewer file1.svg file2.svg
```

It will fetch all the colors of a YAML file which must have the following structure:

```yaml
colors:
  - '#FFEBEE'
  - '#FFCDD2'
  - '#EF9A9A'
  - '#E57373'
  - '#EF5350'
  - '#F44336'
```

It also supports glob file patterns to check multiple files matching the pattern like this:

```
npx vscode-icon-theme-reviewer --colors colors.yml ./images/**/*.svg ./another-dir/*.svg test.svg
```

## Programmatic use

The tool can be imported as module into existing JavaScript or TypeScript code. Therefor it is necessary to install it via npm or yarn:

NPM:

```
npm install --save-dev vscode-icon-theme-reviewer
```

Yarn:

```
yarn add --dev vscode-icon-theme-reviewer
```

The module can be imported like this:

```ts
import { isColorInPalette, getSuggestions } from 'vscode-icon-theme-reviewer';

isColorInPalette('#FFFFFF', ['#EEEEEE', '#121212']);
// false

getSuggestions('#C0CA35', ['#EEEEEE', '#121212']);
// [
//   { hex: '#C0CA33', distance: 0.160467661071053 },
//   { hex: '#CDDC39', distance: 4.307076277707079 },
//   { hex: '#D4E157', distance: 5.606714639567858 },
//   { hex: '#AFB42B', distance: 5.713845679863578 },
//   { hex: '#DCE775', distance: 8.065940911169271 }
// ]
```
