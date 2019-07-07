var request = require('request');

exports.enviarSMS = async function(p_numero) {
  var val = await Math.floor(1000 + Math.random() * 9000);

  return new Promise((resolve, reject) => {

    var option = {
      url: `https://api.elasticemail.com/v2/sms/send?apikey=25cfe08a-4823-4064-8df0-ecdc742a02e6&to=%2b504${p_numero}&body=Su codigo de verificacion es: ${val}`
    }

    request.post(option, (err, httpResponse, body) => {
      if (!err) {
        if (httpResponse.statusCode == 200) {
          resolve(val);
        } else {
          reject(err);
        }
      } else {
        reject(err)
      }
    })
  })
}
