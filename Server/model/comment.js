const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  content: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});

const Comment = mongoose.model("comment",commentSchema);

module.exports = Comment;