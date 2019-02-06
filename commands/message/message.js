//require Other js file
const random = require('../../common/random.js');
const tenor = require('../../common/tenor_api.js');

//request JSON form URL
const request = require("request");
const axios = require("axios");

// var messageRecsive;

module.exports = {
    resMsg: function (message) {
        var messageRecsive = message.content;
        var messageReply = '';

        if (messageRecsive.match(/^boardcast/)) {
            message.delete();
            messageReply = messageRecsive.replace('boardcast ', '');
            message.channel.send('@everyone ' + messageReply);
        } else if (msgRecsive.match(/^rm -msg [1-999]$/)) {
            var com = msgRecsive.replace('rm -msg ', '');
            var limit = parseInt(com, 10) + 1;
            message.channel.fetchMessages({
                    limit: limit
                })
                .then(function (list) {
                    message.channel.bulkDelete(list);
                }, function (err) {
                    message.channel.send("ERROR: ERROR CLEARING CHANNEL.")
                })
        } else if (messageRecsive.match(/^gif/)) {
            var key = messageRecsive.replace('gif ', '');
            var msg = tenor.random_gif(key, function (img) {
                if (img == null) {
                    message.channel.send('ไม่มีค่าาาาา XD');
                } else {
                    message.channel.send('นี่ค่ะ ' + img);
                }
            });
        } else if (messageRecsive.match(/^gimme/)) {
            var key = messageRecsive.replace('gif ', '');
            var msg = tenor.random_gif(key, function (img) {
                if (img == null) {
                    message.channel.send('ไม่มีค่าาาาา XD');
                } else {
                    message.channel.send('นี่ค่ะ ' + img);
                }
            });
        } else if (messageRecsive.match(/สวัสดี/) || messageRecsive.match(/หวัดดี/) || messageRecsive.match(/hello/) || messageRecsive.match(/Hello/)) {
            messageReply = 'สวัสดีค่าาาา';
            message.reply(messageReply);
        } else if (messageRecsive.match(/ฝันดี/) || messageRecsive.match(/ราตรีสวัส/) || messageRecsive.match(/good night/) || messageRecsive.match(/Good Night/) || messageRecsive.match(/goodnight/) || messageRecsive.match(/Goodnight/) || messageRecsive.match(/oyasumi/)) {
            switch (random.random(3)) {
                case 0:
                    messageReply = 'ฝันดีค่าาาา (*^ -^*)';
                    break;
                case 1:
                    messageReply = 'ราตรีสวัสดิ์ค่าาาา (*^ -^*)';
                    break;
                case 2:
                    messageReply = 'อย่าลืมฝันถึงเฌอน้าาาา (> 。<)';
                    break;
            }
            message.reply(messageReply);
        } else if (messageRecsive.match(/เฌอปราง/) || messageRecsive.match(/เฌอ/) || messageRecsive.match(/แคปเฌอ/) || messageRecsive.match(/กับตัน/)) {
            messageReply = 'เรียกหาเฌอเหรอคะ? (*^ -^*)';
            message.reply(messageReply);
        } else if (messageRecsive.match(/น่ารัก/)) {
            messageReply = 'ขอบคุณค่าาาา (*^ -^*)';
            message.reply(messageReply);
        } else if (messageRecsive === 'Koisuru' || messageRecsive === 'koisuru') {
            messageReply = 'Fortune Cookie♩♫♪';
            message.channel.send(messageReply);
        } else if (messageRecsive.match(/จริงเหรอ/)) {
            messageReply = 'ใช่ที่สุดเลยยยย (> 。<)';
            message.reply(messageReply);
        } else if (messageRecsive === 'คุกกี้') {
            messageReply = 'https://scontent.fbkk5-2.fna.fbcdn.net/v/t1.0-9/27751713_409511716139793_2905288473682211443_n.jpg?oh=b2082673dd01c183192b7d9c90bf3a76&oe=5B1460A2';
            message.channel.send(messageReply);
        } else if (messageRecsive === 'thinking') {
            messageReply = 'https://i.redd.it/b7c67vkxjw6z.gif';
            message.channel.send(messageReply);
        } else if (messageRecsive.match(/อยากเล่นแมว/)) {
            switch (random.random(2)) {
                case 0:
                    messageReply = 'ไม่เอาน่า มาเล่นกับเฌอปรางดีกว่านะ >///<';
                    message.reply(messageReply);
                    break;
                case 1:
                    request({
                        url: 'http://random.cat/meow.php',
                        json: true
                    }, function (error, response, body) {
                        messageReply = 'นี่ค่ะ ' + body.file;
                        message.channel.send(messageReply);
                    })
                    break;
            }
        } else if (messageRecsive.match(/แมว/)) {
            request({
                // url: 'http://random.cat/meow.php',
                url: 'http://aws.random.cat/meow',
                json: true
            }, function (error, response, body) {
                messageReply = 'นี่ค่ะ ' + body.file;
                message.channel.send(messageReply);
            })
        } else if (messageRecsive.match(/แจม/)) {
            messageReply = 'ตอนนี้แจมไม่อยู่ค่า คุยกับเฌอปรางก่อนละกันนะ (◠‿◠✿)';
            message.reply(messageReply);
        } else if (messageRecsive.match(/555\+/)) {
            messageReply = 'https://tenor.com/view/cherprang-bnk48-gif-9849452';
            message.channel.send(messageReply);
        } else if (messageRecsive === 'ทำไรยุอะ') {
            messageReply = 'แอบมองเธออยู่นะจ้ะ แต่เธอไม่รู้บ้างเยย';
            message.reply(messageReply);
        } else if (messageRecsive.match(/เหงา/)) {
            messageReply = 'ไม่เป็นไร เดี๋ยวเฌออยู่เป็นเพื่อนเองน้า~ (◠‿◠✿)';
            message.reply(messageReply);
        } else if ((messageRecsive.match(/เดี๋ยว/) || messageRecsive.match(/เดว/)) && (messageRecsive.match(/มา/))) {
            messageReply = 'เฌอจะรอน้า~ (◠‿◠✿)';
            message.reply(messageReply);
        } else if ((messageRecsive.match(/มา/)) && (messageRecsive.match(/ละ/))) {
            messageReply = 'ยินดีต้อนรับค่า (*^ - ^*)♩♫♪';
            message.reply(messageReply);
        }

        // console message
        // if (message.author.bot == true) {
        //   console.log('Bot : ' + messageReply);
        // }
    }
}