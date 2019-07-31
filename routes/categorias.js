var express = require('express')
var router = express.Router()
var categorias = require('../Controller/Categorias/categorias-controller')
var mdAunt = require('../midleware/auth-middleware')

/* uso de middleware */
router.use(mdAunt.content_type)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/insertUpdateDeleteCategoria', categorias.insertUpdateDeleteCategoria)
router.post('/categoriasList', categorias.categoriasList)

module.exports = router
