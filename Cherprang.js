//Get discord.js
const Discord = require('discord.js');

//require Other js file
const token = require('./token.js');

//request JSON form URL
const request = require("request");
const axios = require("axios");

//Create client instance as bot
const botCherprang = new Discord.Client();

//Youtube API
// const YoutubeDL = require('youtube-dl');
// const ytdl = require('ytdl-core');

//Set listener on 'ready'
botCherprang.on('ready', () => {
  
  console.log('Cherprang ready!');

  /* status
    - online
    - idle
    - invisible
    - dnd
  */
  botCherprang.user.setStatus('online');
  
  /* activity
    type=0 = playing  
    type=1 = streaming  
    type=2 = listening 
  */
  botCherprang.user.setPresence({ 
    game: { 
      name: 'คุกกี้เสี่ยงทาย - BNK48', 
      type: 2
    } 
  });
  
});

//Set listener on 'message'
botCherprang.on('message', message => {

  var messageRecsive = message.content;
  var messageReply = '';
  console.log(message.author.username + ' : ' + messageRecsive);

  if (message.author.bot != true){
    if (messageRecsive === 'เฌอปรางทำอะไรได้มั่ง') {
      message.channel.sendMessage(whatChangprangCanDo());
    }
    else if (messageRecsive.match(/^gimme/)) {
      var key = messageRecsive.replace('gimme ', '');
      var url = 'https://api.qwant.com/api/search/images?count=10&offset=1&q=' + key;

      axios.get(url)
        .then(function (response) {
          var img = response.data.data.result.items[random(9)].media;
          messageReply = 'นี่ค่ะ ' + img;
          message.channel.sendMessage(messageReply);
        })
        .catch(function (error) {
          messageReply = 'ไม่มีค่าาาาา XD';
          message.channel.sendMessage(messageReply);
        });
    }
    else if (messageRecsive.match(/สวัสดี/) || messageRecsive.match(/หวัดดี/) || messageRecsive.match(/hello/) || messageRecsive.match(/Hello/)) {
      messageReply = 'สวัสดีค่าาาา';
      message.reply(messageReply);
    }
    else if (messageRecsive.match(/ฝันดี/) || messageRecsive.match(/ราตรีสวัส/) || messageRecsive.match(/good night/) || messageRecsive.match(/Good Night/) || messageRecsive.match(/goodnight/) || messageRecsive.match(/Goodnight/) || messageRecsive.match(/oyasumi/)) {
      switch(random(3)) {
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
    }
    else if (messageRecsive.match(/เฌอปราง/) || messageRecsive.match(/เฌอ/) || messageRecsive.match(/แคปเฌอ/) || messageRecsive.match(/กับตัน/)) {
      messageReply = 'เรียกหาเฌอเหรอคะ? (*^ -^*)';
      message.reply(messageReply);
    }
    else if (messageRecsive.match(/น่ารัก/)) {
      messageReply = 'ขอบคุณค่าาาา (*^ -^*)';
      message.reply(messageReply);
    }
    else if (messageRecsive === 'Koisuru' || messageRecsive === 'koisuru') {
      messageReply = 'Fortune Cookie♩♫♪';
      message.channel.sendMessage(messageReply);
    }
    else if (messageRecsive.match(/จริงเหรอ/)) {
      messageReply = 'ใช่ที่สุดเลยยยย (> 。<)';
      message.reply(messageReply);
    }
    else if (messageRecsive === 'คุกกี้') {
      messageReply = 'https://scontent.fbkk5-2.fna.fbcdn.net/v/t1.0-9/27751713_409511716139793_2905288473682211443_n.jpg?oh=b2082673dd01c183192b7d9c90bf3a76&oe=5B1460A2';
      message.channel.sendMessage(messageReply);
    }
    else if (messageRecsive === 'thinking') {
      messageReply = 'https://i.redd.it/b7c67vkxjw6z.gif';
      message.channel.sendMessage(messageReply);
    }
    else if (messageRecsive.match(/อยากเล่นแมว/)) {
      switch(random(2)) {
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
            message.channel.sendMessage(messageReply);
          })
          break;
      }
    } else if (messageRecsive === 'fuck') {
      messageReply = 'fuckyou123 testing by Wiz';
      message.channel.sendMessage(messageReply);
    }
    else if (messageRecsive.match(/แมว/)) {
      request({
        url: 'http://random.cat/meow.php',
        json: true
      }, function (error, response, body) {
        messageReply = 'นี่ค่ะ ' + body.file;
        message.channel.sendMessage(messageReply);
      })
    }
    else if (messageRecsive.match(/แจม/)) {
      messageReply = 'ตอนนี้แจมไม่อยู่ค่า คุยกับเฌอปรางก่อนละกันนะ (◠‿◠✿)';
      message.reply(messageReply);
    }
    else if (messageRecsive.match(/555\+/)) {
      messageReply = 'https://tenor.com/view/cherprang-bnk48-gif-9849452';
      message.channel.sendMessage(messageReply);
    }
    else if (messageRecsive === 'ทำไรยุอะ') {
      messageReply = 'แอบมองเธออยู่นะจ้ะ แต่เธอไม่รู้บ้างเยย';
      message.reply(messageReply);
    }
    else if (messageRecsive.match(/เหงา/)) {
      messageReply = 'ไม่เป็นไร เดี๋ยวเฌออยู่เป็นเพื่อนเองน้า~ (◠‿◠✿)';
      message.reply(messageReply);
    }
    // else if (messageRecsive.match(/d/)) {
    //   messageReply = random(10);
    // }

    if (message.author.bot == true){
    console.log('Bot : ' + messageReply);
    }
  }
  
});

// Create an event listener for new guild members
botCherprang.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

function random (num) {
  return Math.floor((Math.random() * num));
}

function whatChangprangCanDo () {
  var canDo = '';
  canDo += 'เฌอปราง สามารถตอบข้อความได้ประมาณนี้หล่ะ :3 \n';
  canDo += '```\n';
  canDo += 'สวัสดี | หวัดดี\n';
  canDo += '';
  canDo += 'เฌอปราง | เฌอ | แคปเฌอ | กับตัน\n';
  canDo += 'น่ารัก\n';
  canDo += 'Koisuru | koisuru\n';
  canDo += 'thinking\n';
  canDo += 'อยากเล่นแมว\n';
  canDo += 'แจม\n';
  canDo += '555+\n';
  canDo += 'ทำไรยุอะ\n';
  canDo += 'เหงา\n';
  canDo += '```';
  return canDo;
}

botCherprang.login(token.sendToken());
