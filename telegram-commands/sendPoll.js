const axios = require("axios");

module.exports = function (telegram_url, senderId, poll, answer, res) {
    console.log("id :", poll.id);
    console.log("question :", poll.question);
    var options = [poll.options[0].text, poll.options[1].text, poll.options[2].text, poll.options[3].text];
    console.log("options :", options);
    return new Promise((resolve, reject) => {
        axios.post(telegram_url + "/sendPoll", {
            chat_id: senderId,
            question: poll.question,
            options: options,
            is_anonymous: false,
            is_closed: poll.is_closed,
            type: 'quiz',
            allows_multiple_answers: poll.allows_multiple_answers,
            correct_option_id: answer
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
