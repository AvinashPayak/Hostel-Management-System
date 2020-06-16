const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');


router.get('/login', userController.getLogin );
router.post('/login', userController.postLogin);
router.post('/logout', userController.postLogout)


router.get('/userhome', userController.getUserHome);

router.get('/userhome/notice/:noticeid',userController.getNotice);


router.post('/register', userController.postRegister);
router.get('/reviews', userController.getReviews);
router.post('/reviews', userController.postReviews)

router.get('/', userController.getIndex);

module.exports = router;