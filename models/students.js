const db = require('../util/database');
const shortid = require('shortid')

module.exports = class Student {
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
}