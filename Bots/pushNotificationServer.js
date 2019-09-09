const pg = require('../config/ps_connection')
let config = require('../config/config')
let request = require('request')

async function servinoti() {
  var id_notificacion = []
  let notificaciones = await pg.func('app.ft_proc_get_notificaciones_server')

  if (Array.isArray(notificaciones[0].ft_proc_get_notificaciones_server)) {
    id_notificacion = notificaciones[0].ft_proc_get_notificaciones_server
  }

  for (let i = 0; i < id_notificacion.length; i++) {
    let payload = await {}

    let titulos = await {
      "en": id_notificacion[i].header
    }

    let body = await {
      "en": id_notificacion[i].body
    }

    var oneS = {
      "app_id": "23b0e319-48c4-454f-96b0-b4e29c5334e2",
      "include_player_ids": id_notificacion[i].clientes_one,
      "data": payload,
      "contents": body,
      "headings": titulos
    }

    var options = {
      method: 'POST',
      url: 'https://onesignal.com/api/v1/notifications',
      headers: {
        'cache-control': 'no-cache',
        Authorization: "Basic YjliZTYyNDItYjQ2MS00OTU1LWE4M2EtYWIyMDY5MjM4ZTcy",
        'Content-Type': 'application/json'
      },
      body: oneS,
      json: true
    };

    request(options, async (error, response, body) => {
      console.log('Entregada');
      await pg.func('app.ft_proc_update_notificacion', [id_notificacion[i].id_notificacion])
    });
  }
}

setInterval(function() {
  servinoti()
}, 3000);
