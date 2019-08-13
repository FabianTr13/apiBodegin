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
router.post('/usuariosList', Usuarios.usuariosList)
router.post('/usuariosConfigList', Usuarios.usuariosConfigList)
router.post('/getUsuario', Usuarios.getUsuario)
router.post('/usuariosPerfiles', Usuarios.usuariosPerfiles)
router.post('/crearUsuario', Usuarios.crearUsuario)
router.post('/validaUsuario', Usuarios.validaUsuario)
router.post('/deleteUser', Usuarios.deleteUser)

module.exports = router
