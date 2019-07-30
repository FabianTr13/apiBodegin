var express = require('express')
var router = express.Router()
var servicios = require('../Controller/Servicios/servicios-controller')
var mdAunt = require('../midleware/auth-middleware')

/* uso de middleware */
router.use(mdAunt.content_type)
// router.use(mdAunt.captchaCheck)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/validaNuevoCliente', servicios.validaNuevoCliente)
router.post('/CrearCliente', servicios.CrearCliente)

module.exports = router

// Lunes
// - [ ] query get categorias
// - [ ] query get picker
// - [ ] intalara toast
// - [ ] Imagen to 64
// - [ ] Guardar producto
// - [ ] Validador de producto
// - [ ] Redirec de producto
//
//
// - [ ] Boton fav para productos nuevo o transacciones
//
// Martes
// - [ ] Listado de productos
// - [ ] delete de producto / inhabilitar
// - [ ] router a ver producto
//
// Martes
// - [ ] cargar producto
// - [ ] validator de update
// - [ ] historial de producto
//
// Lunes
// - [ ] crear categoria
// - [ ] Lista de categorias
// - [ ] Delete o edit categoria
//
// Martes
// - [ ] creation de servicio
// - [ ] Lista de servicio
// - [ ] Delete o update de servicio
// - [ ] router a configuration del servicio
// - [ ] agregado de productos a servicio
//
// Miercoles
// - [ ] configuration de sucursales
// - [ ] configuration de sus por usuario
// - [ ] botón de sucursales
//
// Jueves
// - [ ] Control para transacciones(agregar o quitar produtos)
//
//
// - [ ] panel de servicio y cantidad de entregas
// - [ ] configuration del perfil
// - [ ] estadisticas
// - [ ] reportes
//
// - [ ] validation de trial y pago registro
// - [ ]
