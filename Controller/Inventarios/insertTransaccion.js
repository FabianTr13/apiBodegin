const pg = require('../../config/ps_connection')

exports.insertTransaccion = async function(req, res, next) {

  let producto =
    await pg.func('app.ft_proc_update_producto',
      [
        req.body.token,
        req.body.id_producto,
        req.body.cantidad,
        req.body.costo,
        req.body.fecha,
        req.body.id_tipo_consumo,
        req.body.tipoTransaccion,
        req.body.id_sucursal
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
