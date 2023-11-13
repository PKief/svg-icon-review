const printHelp = () => {
  return console.log(
    `
  Usage
    $ npx svg-icon-review mySvgFile.svg anotherSvgFile.svg

  Usage with glob pattern
    $ npx svg-icon-review ./icons/*.svg

  Options
    --silent, -s  Not showing any output
    --debug, -d  Show generated HTML
    --help, -h  Show help
    `
  );
};

export { printHelp };
