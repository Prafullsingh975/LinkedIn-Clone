const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  pronounes: String,
  heading: String,
  profilePic: String,
  coverImage: String,
  education: [{ type: mongoose.Schema.Types.ObjectId, ref: "education" }],
  country: String,
  city: String,
  mobile: { type: String, minminLength: 10, maxLength: 10, required: true },
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  about: String,
  // activities: [{ type: mongoose.Schema.Types.ObjectId, ref: "activity" }],
  post: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
  dob: { type: String },
  industry: String,
  website: String,
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
  experence: [{ type: mongoose.Schema.Types.ObjectId, ref: "exprence" }],
  certifications: [
    { type: mongoose.Schema.Types.ObjectId, ref: "certificate" },
  ],
  skills: [String],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "project" }],
  visitedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});
 const User = mongoose.model('user',userSchema);

 module.exports = User;
