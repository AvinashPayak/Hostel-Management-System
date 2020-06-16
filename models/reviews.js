const db = require('../util/database');

module.exports = class notices {
    constructor(review, rating, fk_admin_notices){
        this.name = name;
        this.review = review;
        this.rating = rating,
        this.fk_admin_notices = fk_admin_notices; 
    }

    static findAll() {
        return db.execute('SELECT * FROM reviews');
    }

    

}