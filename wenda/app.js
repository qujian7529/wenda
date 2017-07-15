var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var tiwen = require('./routes/tiwen');
var geren = require('./routes/geren');
var geren_wone =require('./routes/geren');
var geren_wtwo = require('./routes/geren');
var geren_wtre = require('./routes/geren');
var geren_wfor = require('./routes/geren');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  resave: true,
  saveUninitalized: false,
  secret: 'adsjfasksdafjhsadkfhdirfkhvaskdf',
  cookie: {
    maxAge: 1000 * 60 * 30
  }
}));


app.use('/', index);
app.use('/users', users);
app.use('/geren',geren);
app.use('/geren_wone',geren_wone);
app.use('/geren_wtwo',geren_wtwo);
app.use('/geren_wtre',geren_wtre);
app.use('/geren_wfor',geren_wfor);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
