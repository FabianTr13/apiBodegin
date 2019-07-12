var express = require('express')
var router = express.Router()
var Usuarios = require('../Controller/Usuarios/usuarios-controller')
var mdAunt = require('../midleware/auth-middleware')


/* uso de middleware */
router.use(mdAunt.content_type)
// router.use(mdAunt.token_validation)

/* POST page. */
router.post('/validaExisteUsuario', Usuarios.validaExisteUsuario)
router.post('/login', Usuarios.login)
router.post('/validaToken', Usuarios.token)
router.post('/validaCelular', Usuarios.validaCelular)
router.post('/cambiarPassword', Usuarios.cambiarPassword)

module.exports = router
