const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  grade: String,
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required:[true,"End Feield required"]
  },
  field: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
},{timestamps:true});

const Education = mongoose.model('education',educationSchema);
module.exports = Education;