const database = require('mysql2');

const pool = database.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hostel',
    password: 'Avinash'
});