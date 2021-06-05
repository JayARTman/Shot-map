const Cities = require('./Cities');
const Users = require('./Users');
const Posts = require('./Posts');


Posts.belongsTo(Users, {
    foreignKey: 'user_name',
    constraints: false,
     allowNull:true,
      defaultValue:null
});

Users.hasMany(Posts, {
    constraints: false
});

Posts.hasOne(Cities, {
    foreignKey: 'location',
    constraints: false
});

module.exports = {
    Posts,
    Users,
    Cities
};



