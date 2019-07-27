const pg = require('../../config/ps_connection')

exports.nuevoProducto = async function(req, res, next) {
  console.log('llege registrro');
  let producto =
    await pg.func('app.ft_mant_insert_producto',
      [
        req.body.token,
        req.body.nombre,
        req.body.descripcion,
        req.body.codigobarra,
        req.body.id_categoria,
        req.body.fotografia,
        JSON.stringify(req.body.sucursales),
        req.body.costo
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
