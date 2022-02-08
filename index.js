const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

// setup connect mongodb
mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log('Connect database mongodb!')
})
.catch((error) => {
    console.error('Connect database is failed' + error)
})

const app = express()

const userRoute = require('./src/routes/user')
const todoRouter = require('./src/routes/todo')

// Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())

// Routes
app.use('/users', userRoute)
app.use('/users', todoRouter)

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is OKK!'
    })
})

// Error
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Error handler function
app.use((req, res) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    return res.status(status).json({
        error: {
            message: err.message
        }
    })
})

const port = app.get('port') || 3000
app.listen(port, () => {
    console.log('Start ' + port)
})