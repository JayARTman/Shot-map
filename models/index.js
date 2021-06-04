
const Users = require('./Users');
const Posts = require('./Posts');
const Cities = require('./Cities');

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



