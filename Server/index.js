const express = require("express");
const connectDB = require("./config/db");

const server = express();

server.use(express.json());

server.get('/',(req,res)=>{
    res.send("Welcome LinkdeIn Backend")
})
server.use('/api/v1/user',require('./routes/user.js'));
server.use('/api/v1/post',require('./routes/post.js'));
server.use("/api/v1/experence", require("./routes/experence.js"));
server.use("/api/v1/certificate", require("./routes/certificate.js"));

server.listen(7000,()=>{
    console.log("server is Running on port 7000");
    connectDB();
})