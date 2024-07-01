const printHelp = () => {
  return console.log(
    `
  Usage
    $ npx svg-icon-review mySvgFile.svg anotherSvgFile.svg

  Usage with glob pattern
    $ npx svg-icon-review ./icons/*.svg

  Options
    --bigIcons, -b  Show big icons in front of the small icons
    --debug, -d  Show generated HTML
    --help, -h  Show help
    --silent, -s  Not showing any output
    --version, -v  Show version
    --previewFile, -p  Specify a custom name for the output file. If not provided, no file will be generated.
    `
  );
};

export { printHelp };
