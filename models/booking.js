const db = require('../util/database');

module.exports = class booking {
    constructor(fk_registrationid_booking, roomnumber, booked){
        this.fk_registrationid_booking = fk_registrationid_booking;
        this.roomnumber = roomnumber;
        this.booked = booked;
    }

    static findAll() {
        return db.execute('SELECT * FROM booking');
    }

    registeredStudent(){
        return db.execute('INSERT INTO booking (fk_registration_id) VALUES(?)', [this.fk_registrationid_booking]);
    }

    addStudent(){
        return db.execute('INSERT INTO booking (roomnumber, booked) VALUES(?,?)',[this.roomnumber,1]);
    }

    static findAllnonbooked(){
        return db.execute('SELECT * FROM booking WHERE booked = ?',[0]);
    }

    static getRoom(roomnumber) {
        return db.execute('SELECT * FROM booking WHERE roomnumber = ?', [roomnumber])
    }

    static bookRoom(roomnumber,regid){
        return db.execute('UPDATE booking SET roomnumber = ?, booked = 1 WHERE fk_registrationid_booking = ?',[roomnumber, regid]);

    }
  

}