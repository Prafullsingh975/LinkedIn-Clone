const express = require('express');
const router = express.Router();

const { isLogin } = require('../middlewares/auth');
const { create, remove } = require('../controllers/experence');
const upload = require('../middlewares/multer');

router.post('/',isLogin,upload.single('doc'),create);
router.patch('/',isLogin,upload.single('doc'),create);
router.delete('/:id',isLogin,remove);

module.exports = router