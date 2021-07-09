
const Cities = require('./Cities');
const Users = require('./Users');
const Posts = require('./Posts');
const Images = require('./Images');


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


Posts.belongsTo(Images, {
    foreignKey: 'photo',
    constraints: false
})
module.exports = {
    Posts,
    Users,
    Cities,
    Images
};



