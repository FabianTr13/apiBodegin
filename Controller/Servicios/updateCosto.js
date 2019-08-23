const pg = require('../../config/ps_connection')

exports.updateCosto = async function(req, res, next) {
  let servicios =
    await pg.func('app.ft_proc_update_costo_servicio',
      [
        req.body.id_servicio,
        req.body.costo
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
