const Database = require('easy-json-database')
const { nanoid } = require('nanoid')

const db = new Database('./data.json', {})

function addRecord (args) {
  const { inputMsg } = args
  try {
    JSON.parse(inputMsg)
    const response = db.set(nanoid(10), inputMsg)
    return response
  } catch (error) {
    return 'Please enter valid JSON!'
  }
}

function deleteRecord (args) {
  const { inputMsg: id } = args
  if (id) {
    return db.delete(id)
  } else {
    return 'Please enter valid id!'
  }
}

function findRecord (args) {
  // Get all the data
  const response = db.all()
  return response
}

function getRecord (args) {
  const { inputMsg: id } = args
  if (id) {
    const response = db.get(id)
    return response
  } else {
    return 'Please enter valid id!'
  }
}

module.exports = { addRecord, deleteRecord, findRecord, getRecord }
