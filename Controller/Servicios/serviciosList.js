const pg = require('../../config/ps_connection')

exports.serviciosList = async function(req, res, next) {
  console.log('llege registrro');
  let servicios =
    await pg.func('app.ft_proc_devuelve_servicios',
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
  res.send(servicios)
}
