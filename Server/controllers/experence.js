const Experence = require("../model/exprence.js");
const User = require("../model/user.js");

const create = async (req, res) => {
  try {
    const {
      title,
      empType,
      start,
      end,
      isWorking,
      desc,
      companyName,
      skills,
      locationType,
      location,
    } = req.body;
    if (isWorking && !end) return res.status(401).json("Enter end date");
    const newExperence = await Experence.create({
      title,
      empType,
      start,
      end,
      isWorking,
      desc,
      companyName,
      skills,
      locationType,
      location,
      doc: req.file?.filename,
    });
    const userr = await User.findByIdAndUpdate(
      req.user,
      { $push: { experence: newExperence._id } },
      { new: true }
    );
    return res.status(201).json(userr);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const {
      title,
      empType,
      start,
      end,
      isWorking,
      desc,
      companyName,
      skills,
      locationType,
      location,
    } = req.body;
    //   if (isWorking && !end) return res.status(401).json("Enter end date");
    const newExperence = await Experence.findByIdAndUpdate(
      req.params.id,
      {
        title,
        empType,
        start,
        end,
        isWorking,
        desc,
        companyName,
        skills,
        locationType,
        location,
        doc: req.file?.filename,
      }
    );
    const pre = newExperence.doc;
    if (req.file?.filename && pre) {
      fs.unlink(`./uploads/${pre}`, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        } else console.log("Deleted");
      });
    }
    const userr = await User.findById(req.user);
    return res.status(201).json(userr);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const remove = async (req, res) => {
  try {
    const removed = await Experence.findOneAndDelete({ _id: req.params.id });
    const pre = removed.doc;
    const userr = await User.findByIdAndUpdate(
      req.user,
      { $pull: { experence: req.params.id } },
      { new: true }
    );
    if (pre) {
      fs.unlink(`./uploads/${pre}`, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        } else console.log("Deleted");
      });
    }
    return res.start(200).json(userr);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { create, update, remove };
