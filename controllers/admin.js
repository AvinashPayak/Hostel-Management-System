const Admin = require('../models/admin');

exports.getLogin =  (req, res, next) => {
    res.render('adminlogin');
}

exports.postLogin = (req, res, next) => {
    if(req.url === '/login' && req.method === 'POST'){
        const username = req.body.username;
        const password = req.body.password;
        const admin = new Admin(username, password)
        admin.auth().then(([result]) => {
            // console.log(result[0].present);
            if(result[0].present === 1){
                res.redirect('/admin/home');
            }
            else {
                res.render('adminlogin');
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

exports.getHome = (req, res, next) => {
    res.render('adminhome');
}