const pg = require('../../config/ps_connection')

exports.updateNombre = async function(req, res, next) {
  let servicios =
    await pg.func('app.ft_proc_update_delete_nombre_servicio',
      [
        req.body.id_servicio,
        req.body.accion,
        req.body.descripcion
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(servicios)
}
