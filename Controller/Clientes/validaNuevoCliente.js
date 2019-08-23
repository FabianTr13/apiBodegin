const pg = require('../../config/ps_connection')

exports.validaNuevoCliente = async function(req, res, next) {
  let respuesta =
    await pg.func('clientes.ft_proc_validaor_cliente_nuevo',
      [
        req.body.usuario
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
  console.log(respuesta);
  res.send(respuesta[0].ft_proc_validaor_cliente_nuevo)
}
