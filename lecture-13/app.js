var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nodemailer = require('nodemailer');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//NODEMAILER
var transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 25,
  auth: {
    user: "youruser", 
    pass: "yourpassword" 
  },
  tls:{
    rejectUnauthorized:false
  }
});

var mailOptions = {
  from: '"Nodemailer Node App" <youruser>',
  to: 'some email adress',
  subject: 'Nodemailer test',
  text: 'Hello from Nodemailer ',
  html: '<b>Hello</b><br> this is first email send with Nodemailer'
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});



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

app.listen(3000)
module.exports = app
