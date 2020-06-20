const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/login', adminController.getLogin);

router.post('/login', adminController.postLogin)

router.get('/home', adminController.getHome);

router.get('/rooms', adminController.getRooms )

router.post('/logout', adminController.postLogout)

module.exports = router;