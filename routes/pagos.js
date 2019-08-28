var express = require('express')
var router = express.Router()
var pagos = require('../Controller/Pagos/pagos-controller')
var mdAunt = require('../midleware/auth-middleware')

/* uso de middleware */
router.use(mdAunt.content_type)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/insertPago', pagos.insertPago)
router.post('/getPagos', pagos.getPagos)
router.post('/validaPago', pagos.validaPago)

module.exports = router
