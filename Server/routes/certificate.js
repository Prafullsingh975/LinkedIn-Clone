const express = require('express');
const router = express.Router();

const { isLogin } = require("../middlewares/auth");
const upload = require('../middlewares/multer');
const { create, remove } = require('../controllers/certificate');

router.post('/',isLogin,upload.single('doc'),create);
router.delete('/:id',isLogin,remove);

module.exports = router;