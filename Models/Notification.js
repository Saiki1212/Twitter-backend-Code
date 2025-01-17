const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAtDate: {
        type:Date,
        default: Date.now,
    }
})

const Notification = mongoose.model('Notification', NotificationSchema)
module.exports = Notification;