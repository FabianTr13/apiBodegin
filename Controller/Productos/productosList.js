const pg = require('../../config/ps_connection')

exports.productosList = async function(req, res, next) {
  let producto =
    await pg.func('app.ft_proc_devuelve_productos_list_servicio',
      [
        req.body.id_servicio,
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
  res.send(producto)
}
