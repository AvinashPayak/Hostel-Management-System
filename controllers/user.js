const Students = require('../models/students')

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

exports.postRegister = (req, res, next) => {
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const gender = req.body.gender;
    const college = req.body.college;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const password = req.body.password;
    console.log(fname, lname, gender, college, mobile, email, password)
    const students = new Students(fname, lname, gender, college, mobile, email, password);
    students.insert().then(result => {
        if(req.url === '/register' && req.method === 'POST'){
            console.log(result);
            res.redirect('/login')
        }
    }).catch(err => {
        console.log(err);
    })
}

exports.getUserHome = (req, res, next) => {
    Students.findByMail(req.session.emailid).then(([student]) => {
        req.session.regid = student[0].registrationid;
        res.render('userhome', {
            student: student[0]
        });
    }).catch()
}

exports.getIndex = (req, res, next) => {
    res.render('index');
}