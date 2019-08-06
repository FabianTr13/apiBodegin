const pg = require('../../config/ps_connection')

exports.updateSucursalSeleccionada = async function(req, res, next) {
  console.log(req.body);
  let sucursales =
    await pg.func('app.ft_proc_update_suc_seleccionada',
      [
        req.body.id_sucursal,
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
  res.send(sucursales)
}
