const axios = require("axios");

module.exports = function (telegram_url, senderId, poll, answer, res) {
    return new Promise((resolve, reject) => {
        axios.post(telegram_url + "/sendPoll", {
            chat_id: senderId,
            question: poll.question,
            options: poll.options,
            is_anonymous: poll.is_anonymous,
            is_closed: poll.is_closed,
            type: poll.type,
            allows_multiple_answers: poll.allows_multiple_answers,
            correct_option_id: answer - '1'
        }).then(resp => {
            res.send();
            res.end();
            resolve("Quiz Sent");
        }).catch(err => {
            console.log(err.response.data);
            res.end();
            resolve(err.response.data);
        });
    });
}