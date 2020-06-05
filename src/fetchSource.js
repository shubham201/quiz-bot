const fetch = require('node-fetch');

module.exports = function (url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((resp) => {
                resolve(resp.text());
            })
            .catch((error) => {
                reject(error);
            });
    });
}
