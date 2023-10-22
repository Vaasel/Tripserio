const express = require("express");
require("dotenv").config();

const cors = require("cors")

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

const paymentRouter = require("./routes/paymentRoutes");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errorMiddleware");
const path = require("path");
const chatRouter = require("./routes/chatRoutes.js");


// cloudinary settings
require("./middlewares/cloudinary");

// database connection
const password = encodeURIComponent("VeWfo5KQ9ZSPtpBy");
const uri = "mongodb+srv://Harry:" + password + "@vaasel.0ximno3.mongodb.net/Tripserio?retryWrites=true&w=majority";

require("./db/conn.js")(uri);





//middlewares
app.use(cors({ origin: 'http://localhost:3000' }))
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
    store: MongoStore.create({ mongoUrl: uri })
}))




//Routes

app.use("/user", userRouter)
app.use("/trips", tripRouter)
app.use("/blog", blogRouter)

app.use("/payment",paymentRouter)
app.use("/chat", chatRouter)

app.get("/", (req, res) => {
    res.send("app is working")
})

const port = process.env.PORT || 5000
const server = app.listen(port)

//socket-io configuration
const io = require("socket.io")(server);
require("./utils/socket-io")(io, eventEmitter)


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



