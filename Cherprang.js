//Get discord.js
const Discord = require('discord.js');
const token = require('./token.js');

//Create client instance as bot
const botCherprang = new Discord.Client();

//Youtube API
// const YoutubeDL = require('youtube-dl');
// const ytdl = require('ytdl-core');

//Set listener on 'ready'
botCherprang.on('ready', () => {
  console.log('Cherprang ready!');
});

//Set listener on 'message'
botCherprang.on('message', message => {

  var messageRecsive = message.content;
  var messageReply = '';
  console.log(message.author.username + ' : ' + messageRecsive);

  if (message.author.bot != true){
    if (messageRecsive === 'เฌอปรางทำอะไรได้มั่ง') {
      message.reply(whatChangprangCanDo());
    }
    else if (messageRecsive.match(/สวัสดี/) || messageRecsive.match(/หวัดดี/)) {
      messageReply = 'สวัสดีค่าาาา';
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
    else if (messageRecsive === 'thinking') {
      messageReply = 'https://i.redd.it/b7c67vkxjw6z.gif';
      message.channel.sendMessage(messageReply);
    }
    else if (messageRecsive.match(/อยากเล่นแมว/)) {
      messageReply = 'ไม่เอาน่า มาเล่นกับเฌอปรางดีกว่านะ >///<';
      message.reply(messageReply);
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

function random (num) {
  return Math.floor((Math.random() * num) + 1);
}

function whatChangprangCanDo () {
  var canDo = '';
  canDo += 'เฌอปราง สามารถตอบข้อความได้ประมาณนี้หล่ะ :3 \n';
  canDo += '```\n';
  canDo += 'สวัสดี | หวัดดี\n';
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
