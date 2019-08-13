const pg = require('../../config/ps_connection')

exports.deleteUser = async function(req, res, next) {
  console.log(req.body);
  let usuario =
    await pg.func('usuarios.ft_proc_delete_usuario',
    [
      req.body.id_usuario
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

  res.send(usuario)
}
