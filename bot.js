//Get discord.js
const Discord = require('discord.js');

//require Other js file
const token = require('./token.js');
const command = require('./commands/index.js');

//Create client instance as bot
const botCherprang = new Discord.Client();

//Set listener on 'ready'
botCherprang.on('ready', () => {
  // console.log('Cherprang ready!');

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
      name: 'BNK48 - BNK48',
      type: 2
    }
  });

});

//Set listener on 'message'
botCherprang.on('message', message => {

  command.message(message)
  
});

botCherprang.login(token.sendToken());