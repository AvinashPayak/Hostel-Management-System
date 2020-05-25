const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const sequelize = require('./util/database');
const studentModel = require('./models/student');

//Link static files
app.use(express.static(path.join(__dirname, 'public'))); 

// EJS templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Routes
const mainRoutes = require('./routes/main'); 
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');



app.use(mainRoutes.routes);
app.use('/user',userRoutes.routes);

sequelize
  .sync({
      logging: console.log 
  })
  .then(result => {
    //   console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })