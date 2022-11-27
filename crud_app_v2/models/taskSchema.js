const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  name: String,
  date: String,
  prio: String,
  task: String,
})

const Schema = mongoose.model('Schema', taskSchema)

module.exports = Schema
