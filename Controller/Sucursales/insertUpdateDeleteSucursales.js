const pg = require('../../config/ps_connection')

exports.insertUpdateDeleteSucursales = async function(req, res, next) {
  console.log(req.body);
  let sucursal =
    await pg.func('app.ft_proc_insert_update_delete_sucursal',
      [
        req.body.token,
        req.body.id_sucursal,
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
  res.send(sucursal[0])
}
