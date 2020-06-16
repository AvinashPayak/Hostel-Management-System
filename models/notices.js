const db = require('../util/database');

module.exports = class notices {
    constructor(name, subject, body, fk_admin_notices){
        this.name = name;
        this.subject = subject;
        this.body = body,
        this.fk_admin_notices = fk_admin_notices; 
    }

    static findAll() {
        return db.execute('SELECT * FROM notices');
    }

    static totalCount(){
        return db.execute('SELECT COUNT(*) AS totalcount FROM notices');
    }

    static getNoticeById(id) {
        return db.execute('SELECT * FROM notices where noticeid = ?', [id]);
    }

  

}