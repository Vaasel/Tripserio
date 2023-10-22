let ErrorHandler = require("./ErrorHandler");
const userModel = require("../models/userModel");
function socketio(io, eventEmitter) {

    io.on('connection', (socket) => {


        socket.on("disconnect", async () => {
            // console.log(socket.userId)
            // console.log("user disconnected")

            try {
                await userModel.updateOne({ _id: socket.userId }, { $set: { is_online: false } })
            } catch (error) {
                console.log(error)
            }
        })



        // This event is emitted when a user logins to the website.
        socket.on("join", (userId) => {
            let id = userId.toString();
            socket.join(id)
            // console.log(id, "joined the channel")
            socket.userId = userId;
        })


    });

    eventEmitter.on("sendMessage", (messages) => {
        let receiverId = messages.receiver._id;
        let room = receiverId.toString()
        io.to(room).emit("message", messages)
        // console.log("message was sent to room ", room);
    })
}

module.exports = socketio;