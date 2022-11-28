const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const mongoURI = 'mongodb://localhost:27017/'
const db = mongoose.connection
const app = express()

mongoose.connect('mongodb://localhost:27017/tasks', () => {
  console.log('The connection with mongod is established')
})
// links the connection to the host
app.listen(3000, () => {
  console.log('listening')
})

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(express.static('public'))

// Importing schema and tasks
const Task = require('./models/tasks.js')
const Schema = require('./models/taskSchema.js')

// Saving data into tasks
// Schema.create(Task, (err, task) => {
//   if (err) {
//     console.log(err.message)
//   } else {
//     console.log(task)
//   }
// })

app.get('/', (req, res) => {
  Schema.find({}, (error, allTasks) => {
    res.render('index.ejs', { task: allTasks })
  })
})

app.get('/new', (req, res) => {
  res.render('new.ejs')
})

app.get('/:id', (req, res) => {
  Schema.findById(req.params.id, (error, task) => {
    res.render('show.ejs', { task: task })
  })
})
//Receving added task
app.post('/', (req, res) => {
  Schema.create(req.body, (error, createdTask) => {
    console.log('task created')
    res.redirect('/')
  })
})

app.get('/:id/edit', (req, res) => {
  Schema.findById(req.params.id, (error, task) => {
    res.render('edit.ejs', { editTask: task })
  })
})

app.put('/:id', (req, res) => {
  Schema.findOneAndUpdate(req.params.id, req.body, { new: true }, (error, task) => {
    res.redirect('/')
  })
})

app.delete('/:id', (req, res) => {
  Schema.findByIdAndRemove(req.params.id, { new: true }, (error, task) => {
    res.redirect('/')
  })
})
