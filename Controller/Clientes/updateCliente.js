const pg = require('../../config/ps_connection')

exports.updateCliente = async function(req, res, next) {
  let cliente =
    await pg.func('clientes.ft_proc_update_cliente',
      [
        req.body.cliente.p_id_cliente,
        req.body.cliente.p_nombre_legal,
        req.body.cliente.p_nombre_comercial,
        req.body.cliente.p_rtn,
        req.body.cliente.p_telefono,
        req.body.cliente.p_direccion,
        req.body.cliente.p_usuario,
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(cliente)
}
