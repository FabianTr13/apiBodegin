const pg = require('../../config/ps_connection')

exports.updateProducto = async function(req, res, next) {

  let producto =
    await pg.func('app.ft_proc_update_producto',
      [
        req.body.id_producto,
        req.body.nombre,
        req.body.descripcion,
        req.body.codigobarra,
        req.body.id_categoria,
        req.body.fotografia,
        req.body.token,
        req.body.id_tipo_consumo
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
