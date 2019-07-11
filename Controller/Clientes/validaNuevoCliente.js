const pg = require('../../config/ps_connection')

exports.validaNuevoCliente = async function(req, res, next) {
  console.log('llege');
  let respuesta =
    await pg.func('clientes.ft_proc_validaor_cliente_nuevo',
      [
        req.body.nombre_legal,
        req.body.celular,
        req.body.rtn,
        req.body.usuario
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(respuesta[0].ft_proc_validaor_cliente_nuevo)
}
