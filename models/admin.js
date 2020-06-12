const db = require('../util/database');

module.exports = class Admins {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    auth(){
        return db.execute('SELECT COUNT(*) AS present FROM admins WHERE username = ? AND password = ?', [this.username, this.password]);
    }
}