const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
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
const User = require('./src/models/User')

// Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())

// Routes
app.use('/users', userRoute)
app.use('/users', todoRouter)

// Dang nhap
app.post('/login', (req, res, next) => {
    var {email, password} = req.body

    User.findOne({
        email: email,
        password: password
    })
    .then((data) => {
        if (data){
            const token = jwt.sign({
                _id: data._id
            }, process.env.SECRET)
            return res.json({
                message: 'Dang nhap thanh cong',
                token: token
            })
        }
        else{
            return res.json('Dang nhap that bai')
        }
    })
    .catch(err => {
        return res.json(err)
    })
})

const port = app.get('port') || 3000
app.listen(port, () => {
    console.log('Start ' + port)
})