const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');


router.get('/login', userController.getLogin );
router.post('/login', userController.postLogin);


router.get('/userhome', userController.getUserHome);

router.post('/register', userController.postRegister);

router.get('/', userController.getIndex);

module.exports = router;