const pg = require('../../config/ps_connection')

exports.registraIdOneSignal = async function(req, res, next) {
  let oneSingal =
    await pg.func('usuarios.ft_proc_registra_usuario_onesignal',
      [
        req.body.token,
        req.body.id_oneSignal
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(oneSingal)
}
