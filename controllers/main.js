const path = require('path');

// student model
const Student = require('../models/student')

exports.getAbout = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'about.html'))
};

exports.getGallery =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'gallery.html'))
};

exports.getIndex = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));  
    res.render('index');
};

exports.postIndex = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
    res.render('index');
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const gender = req.body.gender;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const password = req.body.password;
    Student.create({
        fname: firstName,
        lname: lastName,
        gender: gender,
        mobile: mobile,
        email: email,
        password: password
    })
    .then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })  
};