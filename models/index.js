const sequelize = require('sequelize');

const User = require('./Users');
const Post = require('./Posts');

Post.belongsTo(User, {
    foreignKey: 'user_name'
});

