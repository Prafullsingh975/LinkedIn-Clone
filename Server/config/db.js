const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect("mongodb://127.0.0.1/LinkedIn");
    console.log("Db Connected Successfully..");
}

module.exports = connectDB