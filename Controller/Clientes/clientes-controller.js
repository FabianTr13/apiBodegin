var validaNuevoCliente = require('./validaNuevoCliente');
var CrearCliente = require('./crearCliente');
var getCliente = require('./getCliente');
var updateCliente = require('./updateCliente');
var validaUsuario = require('./validaUsuario');
var uploadImagenClientes = require('./uploadImagenClientes');

//Exports encabezado de funciones
exports.validaNuevoCliente = validaNuevoCliente.validaNuevoCliente;
exports.CrearCliente = CrearCliente.CrearCliente;
exports.getCliente = getCliente.getCliente;
exports.updateCliente = updateCliente.updateCliente;
exports.validaUsuario = validaUsuario.validaUsuario;
exports.uploadImagenClientes = uploadImagenClientes.uploadImagenClientes;
