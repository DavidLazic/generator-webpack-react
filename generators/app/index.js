'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(
      `Thank you for using ${chalk.red('generator-webpack-react')} generator!`
    ));
  }

  writing() {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath()
    );
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationPath()
    );
  }

  install() {
    this.installDependencies();
  }
};
