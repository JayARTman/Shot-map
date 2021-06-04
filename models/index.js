const Users = require('./Users.js');
const Posts = require('./Posts.js');
const Cities = require('./Cities.js');

Posts.belongsTo(Users, {
    foreignKey: 'user_name'
});

Users.hasMany(Posts, {
    foreignKey: 'user_name'
});

// Posts.hasOne(Cities);
Posts.belongsTo(Cities, {
    foreignKey: 'location'
});

Cities.hasMany(Posts, {
    foreignKey: 'location'
})



//     foreignKey: 'city_name'
// });

//Posts.hasOne(Cities);

module.exports = {
    Posts,
    Users,
    Cities
};



