const pg = require('../../config/ps_connection')

exports.realizarEntrega = async function(req, res, next) {
  let servicios =
    await pg.func('app.ft_proc_realizar_entrega',
      [
        req.body.token,
        req.body.id_servicio
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
  res.send(servicios)
}
