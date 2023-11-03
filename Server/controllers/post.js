const Post = require("../model/post.js");
const User = require("../model/user.js");
const Comment = require("../model/comment.js");

const createPost = async (req, res) => {
  try {
    const { desc } = req.body;
    if (desc || req.file?.filename) {
      const newPost = await Post.create({
        creator: req.user,
        desc,
        image: req.file?.filename,
      });
      const userDet = await User.findByIdAndUpdate(
        req.user,
        { $push: { post: newPost._id } },
        { new: true }
      ).populate("post");
      return res.status(201).json(userDet);
    } else return res.status(401).json("Provide image or content");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { desc: req.body?.desc },
      { new: true }
    ).populate({ path: "creator", select: "-password" });
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    const userDet = await User.findByIdAndUpdate(
      req.user,
      { $pull: { post: req.params.id } },
      { new: true }
    ).select("-password");
    return res.status(200).json(userDet);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found");
    const data = post.like.findIndex((id) => String(id) === String(req.user));
    if (data >= 0) post.like.pop(data);
    else post.like.push(req.user);
    await post.save();
    res.status(200).json("Change");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const comment = async (req, res) => {
  try {
    const newComment = await Comment.create({
      creator: req.user,
      content: req.body.content,
    });
    return res.status(201).json(newComment);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const likeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json("comment not found");
    const data = comment.like.findIndex((id) => String(id) === String(req.user));
    if (data >= 0) comment.like.pop(data);
    else comment.like.push(req.user);
    await comment.save();
    res.status(200).json("Change");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { createPost, updatePost, deletePost, likePost, comment,likeComment };
