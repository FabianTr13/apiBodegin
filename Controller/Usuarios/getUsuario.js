const pg = require('../../config/ps_connection')

exports.getUsuario = async function(req, res, next) {
  let usuario =
    await pg.func('usuarios.ft_proc_recupera_usuario',
    [
      req.body.id_usuario
    ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  
  res.send(usuario[0].ft_proc_recupera_usuario)
}
