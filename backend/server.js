const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const app = express();
const userRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errorMiddleware")

// database connection
require("./db/conn.js")();

//middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())


//Routes
app.use("/", userRouter)



const server = app.listen(process.env.PORT || 5000)


process.on("uncaughtException", (error) => {
    console.log(error.message);
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



