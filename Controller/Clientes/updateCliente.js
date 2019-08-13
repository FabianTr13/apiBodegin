const pg = require('../../config/ps_connection')

exports.updateCliente = async function(req, res, next) {
  let cliente =
    await pg.func('clientes.ft_proc_update_cliente',
      [
        req.body.id_cliente,
        req.body.nombre_legal,
        req.body.nombre_comercial,
        req.body.rtn,
        req.body.telefono,
        req.body.direccion,
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
  res.send(cliente)
}
