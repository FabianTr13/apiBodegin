const pg = require('../../config/ps_connection')

exports.insertCategoria = async function(req, res, next) {
  let categoria =
    await pg.func('app.ft_proc_insert_categoria',
      [
        req.body.token,
        req.body.nombre
      ]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }
  res.send(categoria[0].ft_proc_insert_categoria)
}
