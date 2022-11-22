const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: String,
  date: String,
  img: String,
})

const Schema = mongoose.model('Schema', movieSchema)

module.exports = Schema
