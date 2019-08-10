const pg = require('../../config/ps_connection')

exports.CrearCliente = async function(req, res, next) {
  let carrito =
    await pg.func('clientes.ft_proc_registra_cliente',
      [
        req.body.nombre_comercial,
        req.body.nombre_legal,
        req.body.logo,
        req.body.rtn,
        req.body.direccion,
        req.body.celular,
        req.body.usuario,
        req.body.clave
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(carrito)
}
