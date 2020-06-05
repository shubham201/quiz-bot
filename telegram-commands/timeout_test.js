module.exports = function (message, res) {
    return new Promise((resolve, reject) => {
        var str = message.text.toLowerCase();
        var duration = str.substr(14, str.length);
        setTimeout(() => {
            res.send('waited for ' + duration/1000 + ' seconds for message_id :' + message.message_id);
            res.end();
            resolve('leeeeeeeeeee ' + duration);
        }, duration);
    });
}