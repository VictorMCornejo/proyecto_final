var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');
var fileUpload=require('express-fileupload');
var cors=require('cors');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/admin/usuarios');
var loginRouter = require('./routes/admin/login');
var novedadesRouter = require('./routes/admin/novedades');
var mensajesRouter = require('./routes/admin/mensajes');
var turnosRouter = require('./routes/admin/turnos');
var inicioRouter = require('./routes/admin/inicio');
var apiRouter=require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({ // SESIONES
  secret: 'JhGuJhJlkLjHhJkKhGjKlHf',
  cookie: {maxAge:null},
  resave: false,
  saveUninitialized: true
}))
secured=async(req,res,next)=>{ // SEGURIDAD
  try{
    if(req.session.id_usuario){
      next();
    }
    else{
      res.redirect('/admin/login');
    }
  }
  catch(error)
  {
    console.log("error en secured",error);
  }
}


app.use(fileUpload({  // FileUpload
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/', indexRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured,novedadesRouter);
app.use('/admin/turnos', secured,turnosRouter);
app.use('/admin/inicio', secured,inicioRouter);
app.use('/admin/usuarios', secured,usuariosRouter);
app.use('/admin/mensajes', secured,mensajesRouter);
app.use('/api',cors(),apiRouter);

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
