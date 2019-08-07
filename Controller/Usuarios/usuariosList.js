const pg = require('../../config/ps_connection')

exports.usuariosList = async function(req, res, next) {
  let usuario =
    await pg.func('usuarios.ft_proc_devuelve_usuarios_list',
    [
      req.body.token,
      req.body.id_sucursal
    ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(usuario)
}
