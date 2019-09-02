const pg = require('../../config/ps_connection')

exports.loginFinger = async function(req, res, next) {
  // console.log(req.body.usuario);
  let usuario =
    await pg.func('usuarios.ft_proc_devuelve_login_finger',[
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
  res.send(usuario[0])
  // res.send('hola')
}
