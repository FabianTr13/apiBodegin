const pg = require('../../config/ps_connection')

exports.validaPerfil = async function(req, res, next) {
  let perfiles =
    await pg.func('usuarios.ft_proc_valida_perfil',[
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
  res.send(perfiles[0].ft_proc_valida_perfil)
}
