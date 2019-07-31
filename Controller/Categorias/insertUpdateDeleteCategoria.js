const pg = require('../../config/ps_connection')

exports.insertUpdateDeleteCategoria = async function(req, res, next) {
  console.log(req.body);
  let categoria =
    await pg.func('app.ft_proc_insert_update_delete_categoria',
      [
        req.body.token,
        req.body.id_categoria,
        req.body.nombre,
        req.body.accion
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
  res.send(categoria[0])
}
