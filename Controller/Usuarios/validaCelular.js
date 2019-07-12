const pg = require('../../config/ps_connection')
const sms = require('./enviarSMS')

exports.validaCelular = async function(req, res, next) {
  // console.log(req.body.usuario);
  let usuario =
    await pg.func('usuarios.ft_proc_valida_celular',[req.body.celular]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  console.log(usuario);
  if (usuario[0]) {
    //Enviamos el codigo
    let codigoEnviado = await sms.enviarSMS(req.body.celular).catch(err=>{console.log(err);})

    res.send({
      codigo:codigoEnviado,
      id_usuario: usuario[0].id_usuario,
      usuario:usuario[0].usuario
    })
  }else {
    res.send({codigo:null,
              id_usuario: null,
              usuario: null})
  }
}
