const axios = require("axios");

module.exports = function (telegram_url, chat_id, text_for_markdown) {
    return new Promise(function (resolve, reject) {
        axios.post(telegram_url + "/sendMessage", {
            chat_id: chat_id,
            text: text_for_markdown,
            parse_mode: 'Markdown'
        }).then(resp => {
            resolve('Message Posted');
        }).catch(err => {
            reject(err);
        });
    });
}