var validaExisteUsuario = require('./validaExisteUsuario');
var login = require('./login');
var token = require('./validaToken');
var validaCelular = require('./validaCelular');
var cambiarPassword = require('./cambiarPassword');

//Exports encabezado de funciones
exports.validaExisteUsuario = validaExisteUsuario.validaExisteUsuario;
exports.login = login.login;
exports.token = token.validaToken;
exports.validaCelular = validaCelular.validaCelular;
exports.cambiarPassword = cambiarPassword.cambiarPassword;
