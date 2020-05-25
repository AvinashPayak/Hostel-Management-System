const Sequelize = require('sequelize');

const sequelize = require('../util/database')


const Student = sequelize.define('student', {
    student_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    regid: {
        type: Sequelize.UUID,
    },
    fname: {
        type: Sequelize.STRING
    },
    lname: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING

    },
    mobile: {
        type: Sequelize.INTEGER

    },
    email: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    }
});

module.exports = Student;