
const express = require('express');
const router = express.Router();

// main controller
const mainController = require('../controllers/main');

router.get('/about', mainController.getAbout);

router.get('/gallery', mainController.getGallery);

router.get('/', mainController.getIndex);

router.post('/', mainController.postIndex);

exports.routes = router;