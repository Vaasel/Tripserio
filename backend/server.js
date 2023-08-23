const express = require("express");
require("dotenv").config();

const app = express();
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const tripRouter = require("./routes/TripRoutes.js");
const paymentRouter = require("./routes/paymentRoutes");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errorMiddleware");
const path = require("path");

// cloudinary settings
require("./middlewares/cloudinary");

// database connection
require("./db/conn.js")();

//middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())


//Routes
app.use("/user", userRouter)
app.use("/trips", tripRouter)
app.use("/blog", blogRouter)
app.use("/payment",paymentRouter)
app.get("/", (req, res) => {
    res.send("app is working")
})


const server = app.listen(process.env.PORT || 5000)


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



