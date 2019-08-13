const pg = require('../../config/ps_connection')

exports.usuariosPerfiles = async function(req, res, next) {
  let perfiles =
    await pg.func('usuarios.ft_proc_get_usuarios_perfiles').catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(perfiles)
}
