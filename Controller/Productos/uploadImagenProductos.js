const pg = require('../../config/ps_connection')

exports.uploadImagenProductos = async function(req, res, next) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  var val = await Math.floor(1000 + Math.random() * 9000);

  let image = req.files.image;
  let filename =  `producto_${req.body.id_producto}${val}.jpg`
  console.log(filename);

  let url_imagen = await pg.func('app.ft_proc_devuelve_url_save')

  image.mv(`${url_imagen[0].ft_proc_devuelve_url_save}${filename}`, function(err) {
    if (err)
      return res.status(500).send(err);
    pg.func('app.upload_imagen_producto',[
      filename,
      req.body.id_producto
    ])
    res.send('File uploaded!');
  });
}
