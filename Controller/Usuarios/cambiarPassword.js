const pg = require('../../config/ps_connection')

exports.cambiarPassword = async function(req, res, next) {
  let usuario =
    await pg.func('usuarios.ft_proc_cambia_password',[req.body.id_usuario, req.body.password]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }

  if (usuario[0]['ft_proc_cambia_password']) {
    res.send({estado:true})
  }else {
    res.send({estado:false});
  }
}
