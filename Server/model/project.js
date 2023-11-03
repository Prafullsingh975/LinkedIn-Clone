const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  skill: [String],
  url: { type: String, required: true },
  start:Date,
  end:Date,
});

const Project = mongoose.model("project",projectSchema);
module.exports = Project;