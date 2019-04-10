module.exports = {
    musicCom: function (message) {
        var VC = message.member.voiceChannel;
        if (!VC) {
            return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL");
        }
        VC.join()
            .then(connection => {
                const dispatcher = connection.playFile('./commands/music/mp3/audiofile.mp3');
                dispatcher.on("end", end => {
                    VC.leave();
                });
            })
            .catch(console.error);
    }
}