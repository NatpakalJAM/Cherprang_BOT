const Discord = require('discord.js');

const botConfig = require('./config/config.json');
const command = require('./commands/index.js');

const botCherprang = new Discord.Client();

botCherprang.on('ready', () => {

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

botCherprang.on('message', message => {

  if (message.author.bot == true) return;
  // if (message.author.equals(bot.user)) return; // same

  // if (!message.content.startsWith(PREFIX)) return;

  /* music */
  if (message.content.match(/^music/)) {
    command.music(message)
  }

  command.message(message)

});

botCherprang.login(botConfig.TOKEN);