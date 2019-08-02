var insertServicio = require('./insertServicio');
var serviciosList = require('./serviciosList');
var updateServicio = require('./updateServicio');
var deleteServicio = require('./deleteServicio');
var serviciosDetalle = require('./serviciosDetalle');
var updateProductosServicios = require('./updateProductosServicios');
var updateNombre = require('./updateNombre');

//Exports encabezado de funciones
exports.insertServicio = insertServicio.insertServicio;
exports.serviciosList = serviciosList.serviciosList;
exports.updateServicio = updateServicio.updateServicio;
exports.deleteServicio = deleteServicio.deleteServicio;
exports.serviciosDetalle = serviciosDetalle.serviciosDetalle;
exports.updateProductosServicios = updateProductosServicios.updateProductosServicios;
exports.updateNombre = updateNombre.updateNombre;
