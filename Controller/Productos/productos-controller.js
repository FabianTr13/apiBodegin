var nuevoProducto = require('./nuevoProducto');
var validaCodigoBarrasNuevo = require('./validaCodigoBarrasNuevo');
var productosList = require('./productosList');
var inventarioList = require('./inventarioList');
var getProducto = require('./getProducto');
var updateProducto = require('./updateProducto');
var deleteProducto = require('./deleteProducto');

//Exports encabezado de funciones
exports.nuevoProducto = nuevoProducto.nuevoProducto;
exports.validaCodigoBarrasNuevo = validaCodigoBarrasNuevo.validaCodigoBarrasNuevo;
exports.productosList = productosList.productosList;
exports.inventarioList = inventarioList.inventarioList;
exports.getProducto = getProducto.getProducto;
exports.updateProducto = updateProducto.updateProducto;
exports.deleteProducto = deleteProducto.deleteProducto;
