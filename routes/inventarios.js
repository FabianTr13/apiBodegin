var express = require('express')
var router = express.Router()
var inventarios = require('../Controller/Inventarios/inventarios-controller')
var mdAunt = require('../midleware/auth-middleware')

/* uso de middleware */
router.use(mdAunt.content_type)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/insertTransaccion', inventarios.insertTransaccion)
router.post('/getChart', inventarios.getChart)
router.post('/reporteStock', inventarios.reporteStock)
router.post('/reportePedido', inventarios.reportePedido)
router.post('/getOrdenCompra', inventarios.getOrdenCompra)
router.post('/ordenesCompra', inventarios.ordenesCompra)


module.exports = router
