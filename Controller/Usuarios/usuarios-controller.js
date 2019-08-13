var validaExisteUsuario = require('./validaExisteUsuario');
var login = require('./login');
var token = require('./validaToken');
var validaCelular = require('./validaCelular');
var cambiarPassword = require('./cambiarPassword');
var usuariosList = require('./usuariosList');
var usuariosConfigList = require('./usuariosConfigList');
var getUsuario = require('./getUsuario');
var usuariosPerfiles = require('./usuariosPerfiles');
var crearUsuario = require('./crearUsuario');
var validaUsuario = require('./validaUsuario');
var deleteUser = require('./deleteUser');

//Exports encabezado de funciones
exports.validaExisteUsuario = validaExisteUsuario.validaExisteUsuario;
exports.login = login.login;
exports.token = token.validaToken;
exports.validaCelular = validaCelular.validaCelular;
exports.cambiarPassword = cambiarPassword.cambiarPassword;
exports.usuariosList = usuariosList.usuariosList;
exports.usuariosConfigList = usuariosConfigList.usuariosConfigList;
exports.getUsuario = getUsuario.getUsuario;
exports.usuariosPerfiles = usuariosPerfiles.usuariosPerfiles;
exports.crearUsuario = crearUsuario.crearUsuario;
exports.validaUsuario = validaUsuario.validaUsuario;
exports.deleteUser = deleteUser.deleteUser;
