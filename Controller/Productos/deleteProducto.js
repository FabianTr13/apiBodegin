const pg = require('../../config/ps_connection')

exports.deleteProducto = async function(req, res, next) {
  let producto =
    await pg.func('app.ft_proc_delete_producto',
      [
        req.body.id_producto
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
