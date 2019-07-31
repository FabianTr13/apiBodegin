const pg = require('../../config/ps_connection')

exports.serviciosDetalle = async function(req, res, next) {
  let servicios =
    await pg.func('app.ft_proc_devuelve_servicio',
      [
        req.body.id_servicio
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(servicios[0].ft_proc_devuelve_servicio)
}
