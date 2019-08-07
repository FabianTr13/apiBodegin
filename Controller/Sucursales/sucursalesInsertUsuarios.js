const pg = require('../../config/ps_connection')

exports.sucursalesInsertUsuarios = async function(req, res, next) {
  let sucursales =
    await pg.func('app.ft_proc_insert_usuarios_sucursales',
      [
        JSON.stringify(req.body.usuarios),
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

  res.send(sucursales)
}
