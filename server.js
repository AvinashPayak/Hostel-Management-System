const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const mysqlstore = require('express-mysql-session')(session);

const sessionStore = new mysqlstore({
    host: 'localhost',
    port: 3306,
    database: 'hostel',
    user: 'root',
    password: 'Avinash',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
})



const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));
// convert the url encoded data
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store: sessionStore }));

// setup ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(userRoutes);
app.use('/admin', adminRoutes);

app.listen(3000);