const mongoose=require("mongoose");
const password = encodeURIComponent("VeWfo5KQ9ZSPtpBy");
const uri = "mongodb+srv://Harry:"+password+"@vaasel.0ximno3.mongodb.net/Tripserio?retryWrites=true&w=majority";


async function connectToDatabase() {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to database");
    } catch (error) {
      console.log("Error!");
    }
  }
  
connectToDatabase();
