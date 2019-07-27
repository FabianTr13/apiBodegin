const pg = require('../../config/ps_connection')

exports.validaCodigoBarrasNuevo = async function(req, res, next) {
  let estado =
    await pg.func('app.ft_proc_valida_codigobarra_nuevo',
      [
        req.body.codigobarra,
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

  res.send(estado[0].ft_proc_valida_codigobarra_nuevo)
}
