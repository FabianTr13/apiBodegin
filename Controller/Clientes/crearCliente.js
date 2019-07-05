// const pg = require('../../config/ps_connection')
//
// exports.CrearCliente = async function(req, res, next) {
//
//   let carrito =
//     await pg.func('."ft_proc_valida_nuevo_usuario',
//       [
//         req.params.token
//       ]).catch(err => {
//       res.status(500).send({
//         error: err,
//         status: 500
//       });
//     })
//
//   if (res.statusCode != 200) {
//     return
//   }
//   res.send(carrito)
// }
