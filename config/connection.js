require('dotenv').config();
const Sequelize = require('sequelize');


const sequelize = new Sequelize('heroku_8686b49a3b7093a', 'bb832e4b25b708', 'f18c6dc2', {

     host: 'us-cdbr-east-04.cleardb.com',
    dialect: 'mysql'
});

module.exports = sequelize;



