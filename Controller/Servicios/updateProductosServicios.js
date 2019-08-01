const pg = require('../../config/ps_connection')

exports.updateProductosServicios = async function(req, res, next) {
  console.log('llege registrro');
  let productos =
    await pg.func('app.ft_proc_update_productos_servicios', [
        req.body.id_servicio,
        JSON.stringify(req.body.productos)
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(productos[0].ft_proc_update_productos_servicios)
}
