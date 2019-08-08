var express = require('express')
var router = express.Router()
var producto = require('../Controller/Productos/productos-controller')
var mdAunt = require('../midleware/auth-middleware')

/* uso de middleware */
// router.use(mdAunt.content_type)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/nuevoProducto', producto.nuevoProducto)
router.post('/validaCodigoBarrasNuevo', producto.validaCodigoBarrasNuevo)
router.post('/productosList', producto.productosList)
router.post('/inventarioList', producto.inventarioList)
router.post('/getProducto', producto.getProducto)
router.post('/updateProducto', producto.updateProducto)
router.post('/deleteProducto', producto.deleteProducto)
router.post('/inventarioTransacciones', producto.inventarioTransacciones)
router.post('/tiposConsumo', producto.tiposConsumo)

module.exports = router
