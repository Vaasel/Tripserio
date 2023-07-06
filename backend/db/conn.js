const { MongoClient } = require("mongodb");
const password = encodeURIComponent("VeWfo5KQ9ZSPtpBy");
const uri = "mongodb+srv://Harry:"+password+"@vaasel.0ximno3.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

module.exports = client;
