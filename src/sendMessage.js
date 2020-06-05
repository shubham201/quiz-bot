const axios = require("axios");

module.exports = function (telegram_url, chat_id, text) {
    return new Promise(function (resolve, reject) {
        axios.post(telegram_url + "/sendMessage", {
            chat_id: chat_id,
            text: text
        }).then(resp => {
            resolve('Message Posted');
        }).catch(err => {
            reject(err);
        });
    });
}