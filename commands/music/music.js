const botConfig = require('../../config/config.json');
const YouTube = require("discord-youtube-api");
const youtube = new YouTube(botConfig.YouTube_API);

var video;

module.exports = {
    musicCom: async function (message) {
        var messageRecsive = message.content.replace('music ', '');
        if (messageRecsive.match(/^http/)) {
            video = await youtube.getVideo(messageRecsive);
        } else {
            video = await youtube.searchVideos(messageRecsive);
        }
        console.log(video.url);
        // var VC = message.member.voiceChannel;
        // if (!VC) {
        //     return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        // }
        // VC.join()
        //     .then(connection => {
        //         const dispatcher = connection.playFile('./commands/music/mp3/audiofile.mp3');
        //         dispatcher.on("end", end => {
        //             VC.leave();
        //         });
        //     })
        //     .catch(console.error);
    }
}