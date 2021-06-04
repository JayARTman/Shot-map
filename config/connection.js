require('dotenv').config();
const Sequelize = require('sequelize');

// const sequelize = new Sequelize('shot_map', 'root', '2501Estratford!', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
const sequelize = new Sequelize('shot_map', process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
module.exports = sequelize;
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     dialectOptions: {
//       decimalNumbers: true,
//     },
//   });

// module.exports = sequelize


