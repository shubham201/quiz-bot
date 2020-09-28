const axios = require("axios");

module.exports = function (telegram_url, senderId, res) {
    return new Promise((resolve, reject) => {
        axios.post(telegram_url + "/sendMessage", {
            chat_id: senderId,
            text: "Answer not available for me. Choose the correct option :",
            reply_markup : {
                keyboard : [[{"text" : "1"}, {"text" : "2"}, {"text" : "3"}], [{"text" : "4"}, {"text" : "5"}]]
            }
        }).then(resp => {
            res.send();
            res.end();
            resolve(true);
        }).catch(err => {
            console.log(err.response.data);
            res.end();
            resolve(false);
        });
    });
}
