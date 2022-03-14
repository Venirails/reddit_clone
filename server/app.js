var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
require('dotenv').config() 

var passport = require("passport");
var strategy = require("./utils/passportStrategy");

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var testAPIRouter = require("./routes/testAPI");
var newpostRouter = require("./routes/newpost");
var listpostRouter = require("./routes/listpost");

var signupRouter = require("./routes/signup");
var getToken = require("./routes/getToken");

var app = express();
passport.use(strategy);
app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use("/testAPI", testAPIRouter);
app.use("/newpost", newpostRouter);
app.use("/listpost", listpostRouter);

app.use("/signup", signupRouter);
app.use("/getToken", getToken);

// catch 404 and forward to error handler


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.get(
  "/api/getUser",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
module.exports = app;
