const pg = require('../../config/ps_connection')

exports.getOrdenCompra = async function(req, res, next) {
  console.log(req.body);
  let inventario =
    await pg.func('app.ft_proc_devuelve_orden_compra_detalle',
      [
        req.body.id_producto,
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
  console.log(inventario);
  res.send(inventario[0].ft_proc_devuelve_orden_compra_detalle)
}
