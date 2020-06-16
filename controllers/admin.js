const Admin = require('../models/admin');
const Student = require('../models/students');
const Notice = require('../models/notices');

exports.getLogin =  (req, res, next) => {
    console.log(req.session.isLoggedIn)
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
                req.session.isLoggedIn=true;
                req.session.save(err => {
                    console.log(err);
                    res.redirect('/admin/home');
                })
            }
            else {
                res.render('adminlogin');
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/login')
    })
}

exports.getHome = (req, res, next) => {
    Student.findAll().then(([students]) => {
        Student.totalCount().then(([studentcount]) => {
            Notice.findAll().then(([notices]) => {
                Notice.totalCount().then(([noticecount]) => {
                    if(!req.session.isLoggedIn){
                        res.render('index')
                    }
                    else {
                        res.render('adminhome', {
                            students: students,
                            studentcount: studentcount[0].totalcount,
                            notices: notices,
                            noticecount: noticecount[0].totalcount
                    })
                    }
                }).catch(err => {
                    console.log(err);
                })
            }).catch(err => {
                console.log(err);
            })
        });
    }).catch(err => {
        console.log(err)
    });
}