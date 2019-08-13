const pg = require('../../config/ps_connection')

exports.validaUsuario = async function(req, res, next) {
  let respuesta =
    await pg.func('clientes.ft_proc_valida_update',
      [
        req.body.id_cliente,
        req.body.usuario,
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(respuesta[0].ft_proc_valida_update)
}
