#!/usr/bin/env node

/* eslint-disable no-useless-return */
"use strict";

var {
  defaultUtilityStyles
} = require('./defaultUtilityStyles');

var {
  buildEasyCssTemplate
} = require('./output/easyCss.template');

var {
  program
} = require('@caporal/core');

var Ora = require('ora');

var cliSpinners = require('cli-spinners');

var fs = require('fs-extra');

var parsonJson = json => JSON.parse(JSON.stringify(json));

program.command('build', 'output easyCss utility styles and easyCss builder').option('-u, --utilities-dir <customUtilityStylesDir>', 'Input directory of custom utility styles for overriding the default utility styles').option('-o, --output-dir <outputDir>', 'Output directory of utility styles and easyCss builder').action(_ref => {
  var {
    options
  } = _ref;
  var spinner = new Ora(cliSpinners.dots);
  spinner.start();
  var customUtilityStylesDir = '.';
  var customUtilityStylesJson = {}; // 1. Reading custom utility styles json for overriding the default utility styles

  try {
    customUtilityStylesDir = (options === null || options === void 0 ? void 0 : options.utilitiesDir) || '.';
    customUtilityStylesJson = fs.readJsonSync("".concat(customUtilityStylesDir, "/easyCss.custom.json"));
  } catch (error) {
    spinner.fail("Can not read json from the easyCss.custom.json in dir ".concat(customUtilityStylesDir, ", will fallback to default utility styles"));
  }

  var customUtilityStyles = parsonJson(customUtilityStylesJson); // 2. Merging default styles with custom config files

  spinner.text = 'Combining utility styles...';
  var utilityStyles = Object.assign(defaultUtilityStyles, customUtilityStyles); // 3. Output utility styles and css builder to easyCss.js

  var outputDir = (options === null || options === void 0 ? void 0 : options.outputDir) || '.';
  spinner.text = "Creating easyCss.js in ".concat(outputDir, "...");
  fs.outputFileSync("".concat(outputDir, "/easyCss.js"), buildEasyCssTemplate(utilityStyles));
  spinner.text = 'Finish';
  spinner.succeed();
});
program.run();