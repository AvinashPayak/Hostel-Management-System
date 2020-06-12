const db = require('../util/database');
const shortid = require('shortid')

module.exports = class Students {
    constructor(fname, lname, gender, college, mobile, email, password){
        this.id = shortid.generate();
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
        this.college = college;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
    }
    
    insert() {
        return db.execute('INSERT INTO students (registrationid, fname, lname, gender, college, mobile, email, password) VALUES(?,?, ?, ?, ?, ?, ?, ?)', 
        [this.id, this.fname, this.lname, this.gender, this.college, this.mobile, this.email, this.password])
    }
    auth() {
        return db.execute('SELECT COUNT(*) AS present FROM students where email=? AND password = ?',[this.email, this.password])
    }

    static findAll() {
        return db.execute('SELECT * FROM students');
    }
    static findByMail(email) {
        return db.execute('SELECT * FROM students WHERE email = ?', [email]);
    }

    static totalCount() {
        return db.execute('SELECT COUNT(*) AS totalcount FROM students')
    }
}