const Admin = require('../models/admin');
const Student = require('../models/students');
const Notice = require('../models/notices');
const Rooms = require('../models/rooms');
const Booking = require('../models/booking');

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

exports.getRooms = (req, res, next) => {
    Rooms.findAll().then(([rooms]) => {
       Student.findAll().then(([students]) => {
        Booking.findAll().then(([booking]) => {
            Booking.findAllnonbooked().then(([nonbooked]) => {
                res.render('adminrooms', {
                    rooms: rooms,
                    students: students,
                    booking: booking,
                    nonbooked: nonbooked
                });
            }).catch()
        })
       }).catch(err => {
           console.log(err);
       });
    }).catch(err => {
        console.log(err);
    })
}
exports.postRooms = (req, res, next) => {
    const roomnumber = req.body.roomnumber;
    const capacity = req.body.capacity;
    const price = req.body.price;
    const rooms = new Rooms(roomnumber, capacity, price, 0, 0);
    rooms.addRoom().then(() => {
        res.redirect('rooms');
    }).catch(err => {
        console.log(err);
    })
}

exports.getRoom = (req, res, next) => {
    const roomnumber = req.params.roomnumber;
    console.log(roomnumber);
    Booking.getRoom(roomnumber).then(([roomdetails]) => {
       Booking.findAllnonbooked().then(([nonbooked]) =>{
        res.render('adminroom', {
            roomdetails: roomdetails,
            nonbooked: nonbooked,
            roomnumber: roomnumber
        } );
       }).catch((err) => {
           console.log(err)
       })
    }).catch(err => {
        console.log(err);
    })
}

exports.postRoom = (req, res, next) => {
    const regid = req.body.ubstudent
    const roomnumber = req.body.roomnumber;
    console.log(regid, roomnumber);
    Booking.bookRoom(roomnumber, regid).then(() => {
        Rooms.increase(roomnumber).then(() => {
            Rooms.check(roomnumber).then(() => {
                res.redirect('/admin/rooms');
            }).catch()
        }).catch()
    }).catch(err => {
        console.log(err);
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