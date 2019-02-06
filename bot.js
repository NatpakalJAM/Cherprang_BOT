//Get discord.js
const Discord = require('discord.js');

//require Other js file
const botConfig = require('./config/config.json');
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

  botCherprang.user.setPresence({
    game: {
      name: 'Cherprang BNK48',
      type: 'Watching'
    }
  });

});

//Set listener on 'message'
botCherprang.on('message', message => {

  command.message(message)

});

botCherprang.login(botConfig.token);