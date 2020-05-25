const path = require('path');

exports.getUserHome = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'user-home.html'));
};

exports.getUserLogin =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'user-login.html'));
};

exports.getUserProfile = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'user-profile.html'));
};

exports.getUserFeedback = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'user-feedback.html'));
};