const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    creator:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    desc:String,
    image:String,
    like:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'comment'}],
},{timestamps:true});

const Post = mongoose.model('post',postSchema);

module.exports = Post;