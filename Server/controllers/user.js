const User = require("../model/user.js");
const Education = require("../model/education.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const registerUser = async (req, res) => {
  const { email, password, firstName, lastName, mobile } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      email,
      firstName,
      lastName,
      mobile,
      password: hash,
    });
    const token = await jwt.sign({ id: newUser.id }, "Prafullkey", {
      expiresIn: "8h",
    });

    // const time = new Date();
    res.status(201).json({ token, id: newUser._id });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUser = await User.findOne({ email });
    if (!isUser) return res.status(404).json("User Not Found");
    const isMatch = await bcrypt.compare(password, isUser.password);
    if (!isMatch) return res.status(401).json("UnAuthorized");
    const token = await jwt.sign({ id: isUser.id }, "Prafullkey", {
      expiresIn: "8h",
    });
    res.status(200).json({ token, id: isUser._id });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const uploadCover = async (req, res) => {
  try {
    // console.log(req.file.filename);
    const user = await User.findById(req.user);
    const pre = user?.coverImage;
    user.coverImage = req.file?.filename;
    await user.save();

    if (req.file?.filename && pre) {
      fs.unlink(`./uploads/${pre}`, (err) => {
        if (err) console.log(err);
        else console.log("Deleted");
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const uploadDp = async (req, res) => {
  try {
    // console.log(req.file.filename);
    const user = await User.findById(req.user);
    const pre = user.profilePic;
    user.profilePic = req.file?.filename;
    const updated = await user.save();

    if (req.file?.filename && pre) {
      fs.unlink(`./uploads/${pre}`, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        } else console.log("Deleted");
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const updateDetails = async (req, res) => {
  try {
    const {
      pronounes,
      heading,
      city,
      country,
      mobile,
      dob,
      industry,
      website,
      skills,
    } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user,
      {
        pronounes,
        heading,
        city,
        country,
        mobile,
        dob,
        industry,
        website,
        skills,
      },
      { new: true }
    );
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

 const updateEdu = async(req,res)=>{
  try {
    const { school, degree, grade, start, end, field, desc } = req.body;
    //Create Education document
    const edu = await Education.create({
      school,
      grade,
      start,
      end,
      field,
      desc,
      degree,
    });

    //Link above Education document with login user
     const userData = await User.findByIdAndUpdate(
       req.user,
       {
         $push: { education: edu._id },
       },
       { new: true }
     ).populate("education");
     return res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
 };

 const deleteEdu = async(req,res)=>{
  try {
    //Delete education doc by Id
     await Education.deleteOne({_id:req.params.id});
     //fetch login user detail
    const details = await User.findById(req.user);

    const arr  = details.education;
    const newArr = arr?.filter(obj=>String(obj._id) != String(req.params.id))
    details.education = newArr;
    await details.save().populate('education');
    return res.status(200).json(details);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  } 
 }

 const sendRequest =  async(req,res)=>{
  try {
    // sender = req.user, rec = req.params.id
    const userDetails = await User.findByIdAndUpdate(req.params.id, {
      $push: { requests :req.user},
    },{new:true});
    return res.status(200).json("Request Sent");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
 }

 const acceptRequest = async(req,res)=>{
  try {
    const detail = await User.findByIdAndUpdate(req.user, {
      $pull: { requests: req.params.id },
      $push: { connections :req.params.id},
    },{new:true});
    return res.status(200).json(detail);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
 }

 const visited = async(req,res)=>{
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $push: { visitedBy: req.user } },
      { new: true }
    );
    return res.start(200).json("Added");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
 };

module.exports = {
  registerUser,
  loginUser,
  uploadDp,
  updateDetails,
  uploadCover,
  updateEdu,
  deleteEdu,
  sendRequest,
  acceptRequest,
  visited
};
