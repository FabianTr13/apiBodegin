let config = require('../config/config')
let pg = require('../config/ps_connection')

module.exports.content_type = function(req, res, next) {
  if (req.get('content-type') == 'application/json') {
    next()
  } else {
    res.status(403).send('Error de headers mal enviadas')
  }
}

module.exports.api_key = function(req, res, next) {
  if (req.get('authorization') == config.app.api_key) {
    next()
  } else {
    res.status(403).send('Error de key api')
  }
}

module.exports.token_validation = function(req, res, next) {
  pg.func('usuarios.ft_proc_valida_token', req.get('token')).then(data => {
    if (data[0]['ft_proc_valida_token']) {
      next()
    } else {
      res.status(401).send('Error de autentificacion')
    }
  }).catch(err => {
    res.status(401).send('Error de autentificacion')
  })
}
