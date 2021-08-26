#!/usr/bin/env node

const chalk = require("chalk")
const boxen = require("boxen")

const utils = require('./utils.js')

const greeting = chalk.white.bold('Welcome to cli based DB!')

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555"
}

const msgBox = boxen(greeting, boxenOptions)

console.log(msgBox)
const inquirer = require('./inquirer')

const run = async () => {
  const credentials = await inquirer.askGithubCredentials()
  let response
  let value
  switch (credentials.operation) {
    case 'Add':
      value = await inquirer.askToInput(credentials.operation)
      response = utils.addRecord(value)
      break
    case 'FindAll':
      response = utils.findRecord()
      break
    case 'FindOne':
      value = await inquirer.askToInput(credentials.operation)
      response = utils.findRecord(value)
      break
    case 'Delete':
      value = await inquirer.askToInput(credentials.operation)
      response = utils.deleteRecord(value)
      break
    default:
      break
  }
  console.log(response)
  run()
}

run()
