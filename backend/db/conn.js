const mongoose = require("mongoose");

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