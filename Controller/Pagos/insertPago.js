const pg = require('../../config/ps_connection')

exports.insertPago = async function(req, res, next) {

  let pago =
    await pg.func('app.ft_proc_insert_pago',
      [
        req.body.token,
        req.body.id,
        req.body.monto,
        JSON.stringify(req.body.response)
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
  res.send(pago[0].ft_proc_insert_pago)
}
