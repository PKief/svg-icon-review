const printHelp = () => {
  return console.log(
    `
  Usage
    $ npx svg-icon-review mySvgFile.svg anotherSvgFile.svg
  
  Options
    --help, -h  Show help
    `
  );
};

export { printHelp };
