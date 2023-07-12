
const express= require("express");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
res.send("app is working")
});
// Load the /users routes
app.use("/users", require("./routes/users.js"));

app.listen(5001);
