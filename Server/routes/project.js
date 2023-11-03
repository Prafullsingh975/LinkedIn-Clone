const express = require("express");
const router = express.Router();

const { isLogin } = require("../middlewares/auth");
const { create, remove } = require("../controllers/project.js");

router.post("/", isLogin, create);
router.delete("/:id", isLogin, remove);

module.exports = router;
