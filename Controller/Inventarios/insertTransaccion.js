const pg = require('../../config/ps_connection')

exports.insertTransaccion = async function(req, res, next) {

  let inventario =
    await pg.func('app.ft_proc_insert_transaccion_inventario',
      [
        req.body.token,
        req.body.id_producto,
        req.body.cantidad,
        req.body.costo,
        req.body.fecha,
        req.body.tipo_transaccion,
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
  res.send(inventario)
}
