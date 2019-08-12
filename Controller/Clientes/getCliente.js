const pg = require('../../config/ps_connection')

exports.getCliente = async function(req, res, next) {
  let cliente =
    await pg.func('clientes.ft_proc_devuelve_cliente_config',
      [
        req.body.token
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(cliente[0])
}
