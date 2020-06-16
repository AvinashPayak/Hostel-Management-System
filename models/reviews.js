const db = require('../util/database');

module.exports = class notices {
    constructor(fk_registrationid_reviews, review, rating, fname, lname, ){
        this.fname = fname;
        this.lname = lname;
        this.review = review;
        this.rating = rating,
        this.fk_registrationid_reviews = fk_registrationid_reviews; 
    }

    static findAll() {
        return db.execute('SELECT * FROM reviews ORDER BY reviewid DESC');
    }

    addReview() {
        return db.execute('INSERT INTO reviews (fk_registrationid_reviews, review, rating, fname, lname) VALUES(?,?,?,?,?)', [this.fk_registrationid_reviews, this.review, this.rating, this.fname, this.lname])
    }
    

}