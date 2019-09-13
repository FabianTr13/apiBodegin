const pg = require('../../config/ps_connection')

exports.getFactura = async function(req, res, next) {

  let pago =
    await pg.func('app.ft_proc_devuelve_factura',
      [
        req.body.id_pago
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
  res.send(pago[0].ft_proc_devuelve_factura)
}
