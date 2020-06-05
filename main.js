var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const config = require('./config/config.js');
const tc = require('./telegram-commands/tc-loader');

let telegram_url = "https://api.telegram.org/bot" + config.TELEGRAM_API_TOKEN;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(config.WELCOME);
    return res.end();
});

var lastMessageId, currentMessageId;

app.post("/start_bot", async function (req, res) {
    if(!req.body){
        res.end();
    }
    const { message } = req.body;
    console.log("message :", message);
    console.log('\nLast Message Id : ', lastMessageId);
    currentMessageId = message.message_id;
    console.log('\nCurrent Message Id : ', currentMessageId);
    var chatId = message.chat.id;
    console.log(chatId);
    lastMessageId = currentMessageId;

    if (message.text == undefined) {
        if (message.poll) {
            app.locals.poll = message.poll;
            app.locals.IsActive = await tc.ask_options(telegram_url, chatId, res);
            res.end();
        }
        else {
            res.end();
        }
    }
    else if (app.locals.IsActive) {
        await tc.sendPoll(telegram_url, chatId, app.locals.poll, message.text, res);
        app.locals.poll = undefined; app.locals.IsActive = false;
        res.end();
    }
    else if (message.text.toLowerCase().substr(0, 13).startsWith('/timeout_test')) {
        await tc.timeout_test(message, res);
    }
    else if (message.text.toLowerCase().startsWith('/start')) {
        await tc.start(telegram_url, chatId, config.WELCOME, res);
    }
    else if (message.text.toLowerCase().substr(0, 1) == '/') {
        await tc.fallback(telegram_url, chatId, res);
    }
    else {
        res.end();
    }
    //  }
});

app.listen(3000, () => console.log("Telegram bot is listening on port 3000!"));
