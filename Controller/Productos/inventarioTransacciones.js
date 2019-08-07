const pg = require('../../config/ps_connection')

exports.inventarioTransacciones = async function(req, res, next) {
  let inventario =
    await pg.func('app.ft_proc_devuelve_producto_inventario',
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
  res.send(inventario)
}
