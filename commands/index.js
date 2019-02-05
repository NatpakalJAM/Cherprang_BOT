const message = require('./message/message.js');

module.exports = {
    message: function (eventMessage) {
        message.resMsg(eventMessage)
    }
}