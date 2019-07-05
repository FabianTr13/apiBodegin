const pg = require('../../config/ps_connection')
const Token = require('../Token/token-controller')

exports.login = async function(req, res, next) {
  //Generamos el Token
  token = await Token.getToken(req.body.usuario).catch((err) => {})

  let usuario =
    await pg.func('usuarios.ft_proc_login',[req.body.usuario, req.body.password, token]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }

  if (usuario[0]['ft_proc_login']) {
    res.send({token:token})
  }else {
    res.send();
  }
}
