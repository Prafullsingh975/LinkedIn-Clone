const mongoose = require('mongoose');

const exprenceSchema = mongoose.Schema({
  title: { type: String, required: true },
  empType: { type: String, required: true },
  start: { type: Date, required: true },
  end: Date,
  isWorking: { type: Boolean, default: true },
  desc: { type: String, required: true },
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  locationType: { type: String, required: true },
  skills:[String],
  doc:String
});

const Exprence = mongoose.model("exprence",exprenceSchema);
module.exports = Exprence;