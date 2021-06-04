const Users = require('./Users.js');
const Posts = require('./Posts.js');
const Cities = require('./Cities.js');

Posts.belongsTo(Users, {
    foreignKey: 'user_name'
});

Users.hasMany(Posts, {
    foreignKey: 'user_name'
});

<<<<<<< HEAD
// Posts.hasOne(Cities);
Posts.belongsTo(Cities, {
    foreignKey: 'location'
});

Cities.hasMany(Posts, {
    foreignKey: 'location'
})



//     foreignKey: 'city_name'
// });
=======
Cities.belongsTo(Posts, {
    foreignKey: 'city_name'
});
>>>>>>> c7744365fa55c4bd60a73634eb448468dbf1dad0

Posts.hasOne(Cities);

module.exports = {
    Posts,
    Users,
    Cities
};



