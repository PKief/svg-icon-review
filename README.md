<h1 align="center">
  <br>
    <img src="./logo.png" alt="logo" width="200">
  <br><br>
  SVG Icon Review
  <br>
  <br>
</h1>

<h4 align="center">Tool to review SVG icons automatically</h4>

## CLI Command

The tool can be executed with this command:

```
bunx svg-icon-review file1.svg file2.svg
```

It also supports glob file patterns to check multiple files matching the pattern like this:

```
bunx svg-icon-review ./images/**/*.svg
```

The output is a preview of how the icons look in either dark or light backgrounds:

<img src="./images/preview.png" alt="logo" >

## Options

Optionally, an additional bigger icon (in size of 32x32px) will be shown in front of the preview. This is useful to see the icon in more detail. This can be done by adding the `--bigIcon` option like this:

```bash
bunx svg-icon-review --bigIcon file1.svg file2.svg
```

The preview will look like this:

<img src="./images/preview-big-icon.png" alt="logo" >

If further help is needed, the `--help` option can be used:

```bash
bunx svg-icon-review --help
```

> Instead of "bunx" you can use "npx" if you prefer Node.js.

## Development

For the development of this tool, Bun.js is used. First you have to install the dependencies:

```bash
bun install
```

Then you can run the tool with:

```bash
bun run start
```

It is going to create a preview image of the logo.svg file in the root directory.

### Formatting and Linting

To format the code, run:

```bash
bun run format
```

To lint the code, run:

```bash
bun run lint
```
