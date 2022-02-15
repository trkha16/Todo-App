const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());

// Routes
const userRoute = require('./src/routes/user');
const todoRouter = require('./src/routes/todo');
const teamRouter = require('./src/routes/team');
const accountRouter = require('./src/routes/account');

app.use('/users', userRoute);
app.use('/users', todoRouter);
app.use('/users', teamRouter);
app.use('/', accountRouter);

const port = app.get('port') || 3000;
app.listen(port, () => {
    console.log('Start ' + port);
});
