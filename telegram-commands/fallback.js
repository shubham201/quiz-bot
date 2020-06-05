const sendMessage = require('../src/sendMessage');
const config = require('../config/config.js');

module.exports = function (telegram_url, senderId, res) {
    return new Promise(async (resolve, reject) => {
        try {
            var fallBackMessage = config.FALLBACK[(Math.round(Math.random() * 10) % config.FALLBACK.length)];
            await sendMessage(telegram_url, senderId, fallBackMessage);
            res.send(fallBackMessage);
            res.end();
            resolve(fallBackMessage);
        } catch (err) {
            console.log(err.response.data);
            res.end();
            resolve(err.response.data);
        }
    });
}