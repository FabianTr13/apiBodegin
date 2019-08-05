const pg = require('../../config/ps_connection')

exports.nuevoProducto = async function(req, res, next) {
  let producto =
    await pg.func('app.ft_mant_insert_producto',
      [
        req.body.token,
        req.body.nombre,
        req.body.descripcion,
        req.body.codigobarra,
        req.body.id_categoria,
        req.body.fotografia
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
  res.send(producto[0])
}
