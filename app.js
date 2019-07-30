var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuarios');
var clientesRouter = require('./routes/clientes');
var productosRouter = require('./routes/productos');
var categoriasRouter = require('./routes/categorias');
var serviciosRouter = require('./routes/servicios');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Opciones del cors
var op = {
  origin: true,
  methods: ['POST', 'GET'],
  credentials: true,
  maxAge: 3600
}

//Router heredas
app.use('/', cors(op), indexRouter);
app.use('/api/usuarios', cors(op), usersRouter);
app.use('/api/clientes', cors(op), clientesRouter);
app.use('/api/productos', cors(op), productosRouter);
app.use('/api/categorias', cors(op), categoriasRouter);
app.use('/api/servicios', cors(op), serviciosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var f = new Date();
  let aa = f.getFullYear()
  let anio = `© ${aa}`
  res.render('error', {
    copyr: anio,
    title: "Bodegin",
    message: "La pagina solicitada no existe"
  });
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
