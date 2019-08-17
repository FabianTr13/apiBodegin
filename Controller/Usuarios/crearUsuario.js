const pg = require('../../config/ps_connection')

exports.crearUsuario = async function(req, res, next) {
  let usuario =
    await pg.func('usuarios.ft_proc_crear_usuario',
    [
      req.body.token,
      req.body.id_usuario,
      req.body.nombre,
      req.body.telefono,
      req.body.usuario,
      req.body.id_perfil,
      req.body.accion
    ]).catch(err => {
      console.log(err);
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }

  res.send(usuario[0].ft_proc_crear_usuario)
}
