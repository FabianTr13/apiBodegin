const pg = require('../../config/ps_connection')

exports.tiposConsumo = async function(req, res, next) {
  let tipos =
    await pg.func('app.ft_proc_devuelve_tipos_consumos').catch(err => {
        console.log(err);
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(tipos)
}
