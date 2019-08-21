const pg = require('../../config/ps_connection')

exports.getServicios = async function(req, res, next) {
  let servicios =
    await pg.func('app.ft_proc_devuelve_servicios_entregas',
      [
        req.body.token
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
  res.send(servicios[0].ft_proc_devuelve_servicios_entregas)
}
