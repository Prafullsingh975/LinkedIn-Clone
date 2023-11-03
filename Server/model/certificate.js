const mongoose = require('mongoose');
 const certificateSchema = mongoose.Schema({
   name: { type: String, required: true },
   orginazation: { type: String, required: true },
   issueDate: { type: Date, required: true },
   expiry: { type: Date },
   category: { type: String, required: true },
   skill: { type: String, required: true },
   url: { type: String },
   doc: { type: String, required: true },
 });

 const Certificate = mongoose.model("certificate",certificateSchema);

 module.exports = Certificate;