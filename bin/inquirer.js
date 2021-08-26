const inquirer = require('inquirer');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'operation',
        message: 'Select the operation to perform',
        type: 'list',
        choices: ['Add', 'FindAll', 'FindOne', 'Delete'],
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please Select the operation to perform'
          }
        }
      }
    ]
    return inquirer.prompt(questions)
  },
  askToInput: (operation) => {
    const msg = getTheMessage(operation)
    const questions = [
      {
        name: 'inputMsg',
        message: msg,
        type: 'input',
        // choices: ['Add', 'FindAll', 'FindOne', 'Delete'],
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please Select the operation to perform'
          }
        }
      }
    ]
    return inquirer.prompt(questions)
  }
}

function getTheMessage (key) {
  if (key === 'Add') {
    return 'Type the json doc to add!'
  } else if (key === 'FindOne') {
    return 'Enter the id'
  } else if (key === 'Delete') {
    return 'Enter the id'
  }
}
