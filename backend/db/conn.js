const mongoose = require("mongoose");

async function dbConnect(uri) {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connection established with database")

    } catch (error) {
        console.log("db error", error)

    }

}
module.exports = dbConnect;