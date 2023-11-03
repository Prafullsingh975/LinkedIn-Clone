const express = require('express');
const router  = express.Router();

const { createPost, updatePost, deletePost, likePost, comment, likeComment } = require('../controllers/post');
const upload = require('../middlewares/multer');
const { isLogin } = require('../middlewares/auth');

router.post("/create",isLogin,upload.single('img'), createPost);
router.patch("/update/:id",isLogin, updatePost);
router.delete("/:id",isLogin, deletePost);
// like / disLike
router.get('/:id',isLogin,likePost)
//comment
router.post('/comment',isLogin,comment)
//likes on comment
router.get('/comment/:id',isLogin,likeComment)

module.exports = router;
