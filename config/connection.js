require('dotenv').config();
const Sequelize = require('sequelize');



// const sequelize = new Sequelize('shot_map', 'root', '2501Estratford!', {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

const sequelize = new Sequelize('shot_map', 'root', '2501Estratford!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;


