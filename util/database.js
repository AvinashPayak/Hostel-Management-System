const Sequelize = require('sequelize');

const sequelize = new Sequelize('hostel', 'root', 'Avinash', {
    dialect: 'mysql',
    logging: false
});
module.exports = sequelize;