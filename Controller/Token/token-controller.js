var jwt = require('jwt-simple');
var config = require('../../config/config');
var pg = require('../../config/ps_connection');

exports.getToken = async function(req, res, next) {
  var payload = {
    usuario: req.body.id_usuario
    time: new Date().toLocaleString()
  };
  var token =
    await jwt.encode(payload, config.app.api_key, 'HS512');

  let creacion =
    await pg.func('api_catalogo.ft_proc_registra_token',[
      token,
      req.body.id_usuario
    ]).catch((err) => {
    res.status(401).send('Error al crear');
  })

  if (res.statusCode != 200) return;

  res.send(token);
};

exports.decodeToken = function(p_token) {
  var decoded = jwt.decode(p_token, config.app.api_key, false, 'HS512');
  return decode;
}
