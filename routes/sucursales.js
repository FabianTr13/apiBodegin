var express = require('express')
var router = express.Router()
var sucursales = require('../Controller/Sucursales/sucursales-controller')
var mdAunt = require('../midleware/auth-middleware')

/* uso de middleware */
router.use(mdAunt.content_type)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/insertUpdateDeleteSucursales', sucursales.insertUpdateDeleteSucursales)
router.post('/sucursalesList', sucursales.sucursalesList)
router.post('/obtenerSucursalSeleccionada', sucursales.obtenerSucursalSeleccionada)
router.post('/updateSucursalSeleccionada', sucursales.updateSucursalSeleccionada)
router.post('/sucursalesListUsuario', sucursales.sucursalesListUsuario)

module.exports = router
