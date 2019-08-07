var insertUpdateDeleteSucursales = require('./insertUpdateDeleteSucursales');
var sucursalesList = require('./sucursalesList');
var obtenerSucursalSeleccionada = require('./obtenerSucursalSeleccionada');
var updateSucursalSeleccionada = require('./updateSucursalSeleccionada');
var sucursalesListUsuario = require('./sucursalesListUsuario');
var sucursalesInsertUsuarios = require('./sucursalesInsertUsuarios');

//Exports encabezado de funciones
exports.sucursalesList = sucursalesList.sucursalesList;
exports.insertUpdateDeleteSucursales = insertUpdateDeleteSucursales.insertUpdateDeleteSucursales;
exports.obtenerSucursalSeleccionada = obtenerSucursalSeleccionada.obtenerSucursalSeleccionada;
exports.updateSucursalSeleccionada = updateSucursalSeleccionada.updateSucursalSeleccionada;
exports.sucursalesListUsuario = sucursalesListUsuario.sucursalesListUsuario;
exports.sucursalesInsertUsuarios = sucursalesInsertUsuarios.sucursalesInsertUsuarios;
