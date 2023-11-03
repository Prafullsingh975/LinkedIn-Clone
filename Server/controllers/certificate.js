const { json } = require('express');
const Certificate = require('../model/certificate.js');
const User = require('../model/user.js');

const create = async (req,res)=>{
    try {
        const {
          url,
          category,
          skill,
          expiry,
          issueDate,
          orginazation,
          name,
        } = req.body;
        const newCertificate = await Certificate.create({
          url,
          category,
          skill,
          expiry,
          issueDate,
          orginazation,
          name,
          doc:req.file?.filename
        });
        const userr = await User.findByIdAndUpdate(
          req.user,
          { $push:{certificate:newCertificate._id} },
          { new: true }
        );
        return res.status(201),json(userr);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
const remove = async (req, res) => {
  try {
    const removed = await Certificate.findOneAndDelete({ _id: req.params.id });
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

module.exports = {create,remove}