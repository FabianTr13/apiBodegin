const pg = require('../../config/ps_connection')

exports.categoriasList = async function(req, res, next) {
  let categoria =
    await pg.func('app.ft_proc_devuelve_categorias',
      [
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

  console.log(categoria);
  res.send(categoria)
}
