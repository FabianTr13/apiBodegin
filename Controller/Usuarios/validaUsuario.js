const pg = require('../../config/ps_connection')

exports.validaUsuario = async function(req, res, next) {
  let usuario =
    await pg.func('usuarios.ft_proc_valida_usuario',[
      req.body.id_usuario,
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

  res.send(usuario[0].ft_proc_valida_usuario)
}
