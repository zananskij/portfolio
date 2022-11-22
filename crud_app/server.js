const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const mongoURI = 'mongodb://localhost:27017/'
const db = mongoose.connection
const app = express()

mongoose.connect('mongodb://localhost:27017/movies', () => {
  console.log('The connection with mongod is established')
})

app.listen(3000, () => {
  console.log('listening on 3000')
})

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const movies = require('./models/movies.js')
const Schema = require('./models/movieSchema.js')

/////////Setup////////////

// Schema.create(movies, (err, movies) => {
//   if (err) {
//     console.log(err.message)
//   } else {
//     console.log(movies)
//   }
// })
// Seeding data

// Index
app.get('/', (req, res) => {
  Schema.find({}, (error, allMovies) => {
    res.render('index.ejs', { movies: allMovies })
  })
})

// Show

app.get('/:id', (req, res) => {
  Schema.findById(req.params.id, (error, movie) => {
    res.render('show.ejs', { movies: movie })
  })
})
