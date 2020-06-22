const db = require('../util/database');

module.exports = class rooms {
    constructor(roomnumber, capacity, price, isfull, occupied){
        this.roomnumber = roomnumber;
        this.capacity = capacity;
        this.price = price;
        this.isfull = isfull;
        this.occupied = occupied; 
    }

    static findAll() {
        return db.execute('SELECT * FROM rooms');
    }

    addRoom(){
        return db.execute('INSERT INTO rooms (roomnumber, capacity, price) VALUES(?,?,?)', [this.roomnumber, this.capacity, this.price]);
    }

    static increase(roomnumber){
        return db.execute('UPDATE rooms SET occupied = (occupied + 1) WHERE (roomnumber = ?)',[roomnumber]);
    }
    static check(roomnumber){
        return db.execute('UPDATE rooms SET isfull = 1 WHERE roomnumber = ? AND occupied = capacity', [roomnumber])
    }
    
    
}