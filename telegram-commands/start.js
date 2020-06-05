const sendMessage = require('../src/sendMessage');

module.exports = function (telegram_url, senderId, message, res) {
    return new Promise((resolve, reject) => {
        sendMessage(telegram_url, senderId, message
        ).then((resp) => {
            res.send(message);
            res.end();
            resolve(resp);
        }).catch((err) => {
            console.log(err.response.data);
            res.end();
            resolve(err.response.data);
        });
    });
}