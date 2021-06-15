require('dotenv').config();
const Sequelize = require('sequelize');


<<<<<<< HEAD
const sequelize = new Sequelize('heroku_8686b49a3b7093a', 'bb832e4b25b708', 'f18c6dc2', {
=======
const sequelize = new Sequelize('shot_map', 'root', 'Superimportantsequel1423!', {
>>>>>>> 5e648821224bbc217fe2e8ee3832d5843e43d375

     host: 'us-cdbr-east-04.cleardb.com',
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



'mysql:// bb832e4b25b708 : f18c6dc2 @ us-cdbr-east-04.cleardb.com / heroku_8686b49a3b7093a ?reconnect=true'