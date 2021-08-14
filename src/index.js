#!/usr/bin/env node
/* eslint-disable no-useless-return */
const { defaultUtilityStyles } = require('./defaultUtilityStyles')
const { buildEasyCssTemplate } = require('./output/easyCss.template')
const { program } = require('@caporal/core')
const Ora = require('ora')
const cliSpinners = require('cli-spinners')
const fs = require('fs-extra')

const parsonJson = (json) => JSON.parse(JSON.stringify(json))

program
  .command('build', 'output easyCss utility styles and easyCss builder')
  .option(
    '-u, --utilities-dir <customUtilityStylesDir>',
    'Input directory of custom utility styles for overriding the default utility styles'
  )
  .option(
    '-o, --output-dir <outputDir>',
    'Output directory of utility styles and easyCss builder'
  )
  .action(({ options }) => {
    const spinner = new Ora(cliSpinners.dots)
    spinner.start()

    let customUtilityStylesDir = '.'
    let customUtilityStylesJson = {}

    // 1. Reading custom utility styles json for overriding the default utility styles
    try {
      customUtilityStylesDir = options?.utilitiesDir || '.'
      customUtilityStylesJson = fs.readJsonSync(
        `${customUtilityStylesDir}/easyCss.custom.json`
      )
    } catch (error) {
      spinner.fail(
        `Can not read json from the easyCss.custom.json in dir ${customUtilityStylesDir}, will fallback to default utility styles`
      )
    }

    const customUtilityStyles = parsonJson(customUtilityStylesJson)

    // 2. Merging default styles with custom config files
    spinner.text = 'Combining utility styles...'
    const utilityStyles = Object.assign(defaultUtilityStyles, customUtilityStyles)

    // 3. Output utility styles and css builder to easyCss.js
    const outputDir = options?.outputDir || '.'
    spinner.text = `Creating easyCss.js in ${outputDir}...`
    fs.outputFileSync(`${outputDir}/easyCss.js`, buildEasyCssTemplate(utilityStyles))

    spinner.text = 'Finish'
    spinner.succeed()
  })

program.run()
