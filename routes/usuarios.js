var express = require('express')
var router = express.Router()
var Usuarios = require('../Controller/Usuarios/usuarios-controller')
// var mdAunt = require('../middleware/middleware-authentication')


/* uso de middleware */
// router.use(mdAunt.content_type)
// router.use(mdAunt.api_key)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/validaExisteUsuario', Usuarios.validaExisteUsuario)
// router.get('/getCarrito/:token', carrito.getCarrito)
// router.get('/cantCarrito/:token', carrito.cantCarrito)

module.exports = router
