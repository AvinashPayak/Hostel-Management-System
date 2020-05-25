const path = require('path');

const db = require('./util/database');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes.routes);


app.listen(3000);