const Sequelize = require('sequelize');

const sequelize = new Sequelize('hostel', 'root', 'Avinash', {
    dialect: 'mysql',
    host: 'localhost'});

module.exports = sequelize;