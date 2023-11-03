const Project = require("../model/project.js");
const User = require("../model/user.js");

const create = async (req, res) => {
  try {
    const { url, skill, name,start,end,desc } =
      req.body;
    const newCertificate = await Project.create({
      url,
      skill,
      name,
      desc,
      start,end
    });
    const userr = await User.findByIdAndUpdate(
      req.user,
      { $push: { projects: newCertificate._id } },
      { new: true }
    );
    return res.status(201), json(userr);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const remove = async (req, res) => {
  try {
    const removed = await Project.findOneAndDelete({ _id: req.params.id });
    const userr = await User.findByIdAndUpdate(
      req.user,
      { $pull: { projects: req.params.id } },
      { new: true }
    );
    return res.start(200).json(userr);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { create, remove };
