require('dotenv').config();
const Sequelize = require('sequelize');

<<<<<<< HEAD
// const sequelize = new Sequelize('shot_map', 'root', '2501Estratford!', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
const sequelize = new Sequelize('shot_map', 'root', '2501Estratford!', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
=======
const sequelize = new Sequelize('shot_map', 'root', 'Valandme123!', {
    host: 'localhost',
    dialect: 'mysql'
});
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });
>>>>>>> 9341ff63770386ac655699923b6fd0078635f548
module.exports = sequelize;
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     dialectOptions: {
//       decimalNumbers: true,
//     },
//   });

 //module.exports = sequelize


