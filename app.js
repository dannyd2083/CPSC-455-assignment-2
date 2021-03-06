var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var app = express();

// mongoose.connect('mongodb://localhost/cardsdb',{useNewUrlParser: true,useUnifiedTopology: true});

mongoose.connect(process.env.MongoDBURL,{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ne4ps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/', indexRouter);
app.use('/api/img',indexRouter);
//test for github action comment
// test auto action
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client", "build")))
  app.get("*", (req, res) => {
    console.log(process.env.PORT)
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}




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
