const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema()

const chatSchema = new mongoose.Schema({
    person1Id: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    person2Id: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    messages: [{
        sender: {
            type: mongoose.Types.ObjectId,
            ref: "users"
        },
        receiver: {
            type: mongoose.Types.ObjectId,
            ref: "users"
        },

        message: String
    }]
})

module.exports = mongoose.model("chats", chatSchema)