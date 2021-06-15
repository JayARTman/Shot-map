require('dotenv').config();
const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {

     host: DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;



'mysql:// bb832e4b25b708 : f18c6dc2 @ us-cdbr-east-04.cleardb.com / heroku_8686b49a3b7093a ?reconnect=true'