var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var River = require("./models/river");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var riverRouter = require('./routes/river');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

var app = express();


mongoose.connect('mongodb+srv://vsravya:vsravya@cluster0.qkgm0f8.mongodb.net/?retryWrites=true&w=majority').
then(() => {
    console.log("DB connected");

    async function recreateDB() {
      // Delete everything
      await River.deleteMany();
      //one instance
      let instance1 = new River({ river_type: "ganga", depth: '4300', origin: "gangotri" });
      let instance2 = new River({ river_type: "godavari", depth: '1200', origin: "godavri" });
      let instance3 = new River({ river_type: "kaveri", depth: '3000', origin: "talakaveri" });
      instance1.save().then(doc => {
        console.log("First object saved")
      }
      ).catch(err => {
        console.error(err)
      });
      instance2.save().then(doc => {
        console.log("Second object saved")
      }
      ).catch(err => {
        console.error(err)
      });
      instance3.save().then(doc => {
        console.log("Third object saved")
      }
      ).catch(err => {
        console.error(err)
      });
  
    }
    let reseed = true;
    if (reseed) { recreateDB(); }

})
.catch((err) => console.log(err.message))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/river', riverRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

