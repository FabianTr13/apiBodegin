const pg = require('../../config/ps_connection')

exports.validaExisteUsuario = async function(req, res, next) {
  console.log(req.body.usuario);
  let usuario =
    await pg.func('usuarios.ft_proc_valida_nuevo_usuario',[req.body.usuario]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(usuario[0]['ft_proc_valida_nuevo_usuario'])
  // res.send('hola')
}
