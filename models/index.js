const Users = require('./Users.js');
const Posts = require('./Posts.js');
const Cities = require('./Cities.js');

Posts.belongsTo(Users, {
    foreignKey: 'user_name'
});

Users.hasMany(Posts, {
    foreignKey: 'user_name'
});

//Cities.belongsTo(Posts, {
//     foreignKey: 'city_name'
// });

//Posts.hasOne(Cities);

module.exports = {
    Posts,
    Users,
    Cities
};



