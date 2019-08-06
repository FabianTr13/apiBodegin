const pg = require('../../config/ps_connection')

exports.sucursalesListUsuario = async function(req, res, next) {
  let sucursales =
    await pg.func('app.ft_proc_devuelve_sucursales_usuario',
      [
        req.body.token
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }

  res.send(sucursales)
}
