const express = require('express');
const router = express.Router();


router.get('/login', (req, res, next) => {
    res.render('userlogin');
});

router.get('/', (req, res, next) => {
    res.render('index');
});

module.exports = router;