
const express= require("express");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
res.send("app is working")
});
// Load the /users routes
app.use("/trips", require("./routes/trips.js"));

app.listen(5001);
