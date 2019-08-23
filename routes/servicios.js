var express = require('express')
var router = express.Router()
var servicios = require('../Controller/Servicios/servicios-controller')
var mdAunt = require('../midleware/auth-middleware')

/* uso de middleware */
router.use(mdAunt.content_type)
// router.use(mdAunt.captchaCheck)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/insertServicio', servicios.insertServicio)
router.post('/serviciosList', servicios.serviciosList)
router.post('/updateServicio', servicios.updateServicio)
router.post('/deleteServicio', servicios.deleteServicio)
router.post('/serviciosDetalle', servicios.serviciosDetalle)
router.post('/updateProductosServicios', servicios.updateProductosServicios)
router.post('/updateNombre', servicios.updateNombre)
router.post('/updateCosto', servicios.updateCosto)

module.exports = router
