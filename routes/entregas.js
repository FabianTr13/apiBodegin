var express = require('express')
var router = express.Router()
var entregas = require('../Controller/Entregas/entregas-controller')
var mdAunt = require('../midleware/auth-middleware')

/* uso de middleware */
router.use(mdAunt.content_type)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/getServicios', entregas.getServicios)
router.post('/realizarEntrega', entregas.realizarEntrega)

module.exports = router
