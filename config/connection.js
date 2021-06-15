require('dotenv').config();
const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, DB_USER, DB_PW, {

     host: DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;



'mysql:// bb832e4b25b708 : f18c6dc2 @ us-cdbr-east-04.cleardb.com / heroku_8686b49a3b7093a ?reconnect=true'