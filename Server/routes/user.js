const express = require('express');
const router = express.Router();

const { registerUser, loginUser, uploadDp, updateDetails, uploadCover, updateEdu, deleteEdu, sendRequest, acceptRequest, visited } = require('../controllers/user');
const { isLogin } = require('../middlewares/auth');
const upload = require('../middlewares/multer');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/upload-dp',isLogin,upload.single('dp'),uploadDp);
router.post('/upload-cover',isLogin,upload.single('cover'),uploadCover);
router.post("/update-details", isLogin, updateDetails);
router.post("/update-edu", isLogin, updateEdu);
router.delete("/delete-edu/:id", isLogin, deleteEdu);
router.get('/send-request/:id',isLogin,sendRequest)
router.get('/accept-request/:id',isLogin,acceptRequest);
router.get('/visited/:id',isLogin,visited);

module.exports = router;