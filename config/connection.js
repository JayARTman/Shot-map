require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('shot_map', 'root', 'Superimportantsequel1423!', {
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

module.exports = sequelize;



