const Students = require('../models/students');
const Notices = require('../models/notices');
const Reviews = require('../models/reviews');

exports.getLogin = (req, res, next) => {
    res.render('userlogin');
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const student = new Students(null,null,null,null,null,email, password);
    student.auth().then(([student]) => {
        if(req.url ==='/login' && req.method === 'POST'){
            if(student[0].present) {
                req.session.isLoggedIn=true;
                req.session.emailid=email;
                req.session.save(err => {
                    console.log(err);
                    res.redirect('/userhome');
                })            }
            else {
                res.render('userlogin')
            }
        }
    }).catch(err => {
        console.log(err);
    })
}

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/login')
    })
}

exports.postRegister = (req, res, next) => {
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const gender = req.body.gender;
    const college = req.body.college;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const password = req.body.password;
    // console.log(fname, lname, gender, college, mobile, email, password)
    const students = new Students(fname, lname, gender, college, mobile, email, password);
    students.insert().then(result => {
        if(req.url === '/register' && req.method === 'POST'){
            // console.log(result);
            res.redirect('/login')
        }
    }).catch(err => {
        console.log(err);
    })
}

exports.getReviews = (req, res, next) => {
    Reviews.findAll().then(([reviews]) => {
        res.render('reviews', {
            reviews: reviews
        });
    }).catch()
}

exports.getUserHome = (req, res, next) => {
    Students.findByMail(req.session.emailid).then(([student]) => {
        req.session.regid = student[0].registrationid;
        Notices.findAll().then(([notices]) => {
            // console.log(notices);
            res.render('userhome', {
                student: student[0],
                notices: notices
            });
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
}

exports.getNotice = (req, res, next) => {
    Notices.getNoticeById(req.params.noticeid).then(([notice]) => {
        res.render('notice', {
            notice: notice[0]
        });
    })
};

exports.getIndex = (req, res, next) => {
    Reviews.findAll().then(([reviews]) => {
        res.render('index', {
            reviews: reviews
        })
    }).catch()
}