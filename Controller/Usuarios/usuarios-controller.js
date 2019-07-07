var validaExisteUsuario = require('./validaExisteUsuario');
var login = require('./login');
var token = require('./validaToken');
var validaCelular = require('./validaCelular');

//Exports encabezado de funciones
exports.validaExisteUsuario = validaExisteUsuario.validaExisteUsuario;
exports.login = login.login;
exports.token = token.validaToken;
exports.validaCelular = validaCelular.validaCelular;
