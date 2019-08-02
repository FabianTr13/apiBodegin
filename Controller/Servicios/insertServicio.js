const pg = require('../../config/ps_connection')

exports.insertServicio = async function(req, res, next) {
  let servicio =
    await pg.func('app.ft_proc_insert_servicio',
      [
        req.body.token,
        req.body.nombre
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(String(servicio[0].ft_proc_insert_servicio))
}
