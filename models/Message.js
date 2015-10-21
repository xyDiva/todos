// message model

var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    content: {
        type: String,
        trim: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', MessageSchema);