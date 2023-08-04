const express = require("express");
require("dotenv").config();
const app = express()
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const Emitter = require("events");
const eventEmitter = new Emitter();

const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const tripRouter = require("./routes/TripRoutes.js");
const chatRouter = require("./routes/chatRoutes.js");



const errorMiddleware = require("./middlewares/errorMiddleware");

//pusherconfig
// require("./utils/pusher")();

// cloudinary settings
require("./middlewares/cloudinary");

// database connection
require("./db/conn.js")();

//EventEmitter Events
require("./utils/eventEmitter")(eventEmitter);



//middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())
app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL })
}))

//Routes

app.use("/user", userRouter)
app.use("/trips", tripRouter)
app.use("/blog", blogRouter)
app.use("/chat", chatRouter)

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})



const port = process.env.PORT || 5500
const server = app.listen(port, () => {
    console.log("app is running....")
})

//socket-io configuration file
// let socketio = require("./utils/socket-io");
const userModel = require("./models/userModel");
const io = require("socket.io")(server);


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("disconnect", async () => {
        // console.log(socket.userId)
        console.log("user disconnected")
        await userModel.updateOne({ _id: socket.userId }, { $set: { is_online: false } })
    })



    // This event is emitted when a user logins to the website.
    eventEmitter.on("join", (channel) => {
        socket.join(channel)
        socket.userId = channel;
    })

    eventEmitter.on("sendMessage", (messages) => {
        io.to(messages[0].receiver._id).emit("sendMessage", messages)
    })

});

//global variables
app.set("eventEmitter", eventEmitter)










process.on("uncaughtException", (error) => {
    console.log(error);
    console.log("shutting down the server due to exception")
    throw Error("i have an error")
    server.close(() => {
        process.exit(1);
    });
})



process.on("unhandledRejection", (error) => {
    console.log(error.message);
    console.log("shutting down the server due to rejection")



    server.close(() => {
        process.exit(1);
    });
})

app.use(errorMiddleware);



