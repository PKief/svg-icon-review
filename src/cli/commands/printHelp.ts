const printHelp = () => {
  return console.log(
    `
  Usage
    $ npx vscode-icon-theme-reviewer mySvgFile.svg anotherSvgFile.svg
  
  Options
    --help, -h  Show help
    `
  );
};

export { printHelp };
