const pg = require('../../config/ps_connection')

exports.ordenesCompra = async function(req, res, next) {
  let inventario =
    await pg.func('app.ft_proc_devuelve_reporte_punto_pedido_orden',
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
  // console.log(inventario);
  res.send(inventario[0].ft_proc_devuelve_reporte_punto_pedido_orden)
}
