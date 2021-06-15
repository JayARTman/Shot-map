
const Cities = require('./Cities');
const Users = require('./Users');
const Posts = require('./Posts');
const Images = require('./Images')

Posts.belongsTo(Users, {
    foreignKey: 'user_name',
    constraints: false
  
});

Users.hasMany(Posts, {
    foreignKey: 'user_name',
    constraints: false
    
});

Posts.belongsTo(Cities, {
    foreignKey: 'location',
    constraints: false
});

// Posts.belongsTo(Images, {
//     foreignKey: 'photo',
//     constraints: false
// })
module.exports = {
    Posts,
    Users,
    Cities,
    Images
};



