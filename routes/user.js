const path = require('path');

const express = require('express')
const router = express.Router();

// User Controller
const usersController = require('../controllers/user');

router.get('/home', usersController.getUserHome)

router.get('/login', usersController.getUserLogin);

router.get('/profile', usersController.getUserProfile);

router.get('/feedback', usersController.getUserFeedback);

exports.routes = router;