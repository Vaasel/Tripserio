const mongoose = require("mongoose");
const password = encodeURIComponent("VeWfo5KQ9ZSPtpBy");
const uri = "mongodb+srv://Harry:" + password + "@vaasel.0ximno3.mongodb.net/Tripserio?retryWrites=true&w=majority";

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connection established with database")

    } catch (error) {
        console.log("db error", error)

    }

}
module.exports = dbConnect;