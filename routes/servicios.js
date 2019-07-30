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
