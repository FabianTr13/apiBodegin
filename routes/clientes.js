var express = require('express')
var router = express.Router()
var clientes = require('../Controller/Clientes/clientes-controller')
var mdAunt = require('../midleware/auth-middleware')

/* uso de middleware */
router.use(mdAunt.content_type)
router.use(mdAunt.captchaCheck)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/validaNuevoCliente', clientes.validaNuevoCliente)
router.post('/CrearCliente', clientes.CrearCliente)

module.exports = router
