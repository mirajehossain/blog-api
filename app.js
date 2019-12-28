const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const path = require('path');
const index = require('./routes/index');

const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/static', express.static(path.join(`${__dirname}/uploads`)));


app.use('/', index);


// Catch unhandling unexpected exceptions
process.on('uncaughtException', (error) => {
  console.error(`uncaughtException ${error.message}`);
});

// Catch unhandling rejected promises
process.on('unhandledRejection', (reason) => {
  console.error(`unhandledRejection ${reason}`);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

module.exports = app;
