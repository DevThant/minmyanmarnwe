const express= require("express");
const app = express();
const indexRoutes = require("./routes/index");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.use(indexRoutes);


app.listen(process.env.PORT, process.env.IP, ()=>{
    console.log("Myanmar Nwe server is running");
}) 