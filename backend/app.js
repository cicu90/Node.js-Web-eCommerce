var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { json } = require("body-parser");
const helmet = require("helmet");

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/usersRoutes');
var productsRouter = require('./routes/productsRoutes');
const CartRouter = require('./routes/cartRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(helmet());
app.use(json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var cors= require("cors")
app.use(cors({origin: 'http://localhost:3000'}));
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', CartRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // console.log("Error Handler Middleware: ");
  // console.error(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (req.headersSent) {
    // When you add a custom error handler,
    // you must delegate to the default Express error handler,
    // when the headers have already been sent to the client:
    return next(err);
  }
  // render the error page
  res.status(err.status || 500).send({
    data: null,
    error: "Something went wrong",
  });
  res.render('error');
});

module.exports = app;
