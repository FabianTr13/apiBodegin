const pg = require('../../config/ps_connection')

exports.uploadImagenClientes = async function(req, res, next) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  var val = await Math.floor(1000 + Math.random() * 9000);

  let image = req.files.image;
  let filename =  `clientes_${req.body.id_cliente}${val}.jpg`

  let url_imagen = await pg.func('app.ft_proc_devuelve_url_save',[
    'clientes'
  ])

  image.mv(`${url_imagen[0].ft_proc_devuelve_url_save}${filename}`, function(err) {
    if (err)
      return res.status(500).send(err);
    pg.func('clientes.ft_proc_update_imagen_cliente',[
      req.body.id_producto
      filename,
    ])
    res.send('File uploaded!');
  });
}
