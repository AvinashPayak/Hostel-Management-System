const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));

// convert the url encoded data
app.use(bodyParser.urlencoded({extended: false}));

// setup ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(userRoutes);
app.use('/admin', adminRoutes);

app.listen(3000);