require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('shot_map', 'root', 'Valandme123!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     dialectOptions: {
//       decimalNumbers: true,
//     },
//   });

 module.exports = sequelize


