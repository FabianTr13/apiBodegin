var jwt = require('jwt-simple');
var config = require('../../config/config');
var pg = require('../../config/ps_connection');

exports.getToken = async function(p_usuario) {
  var payload = {
    usuario: p_usuario,
    time: new Date().toLocaleString()
  };
  var token =
    await jwt.encode(payload, config.app.api_key, 'HS512');

  return token;
};

exports.decodeToken = function(p_token) {
  var decoded = jwt.decode(p_token, config.app.api_key, false, 'HS512');
  return decode;
}
