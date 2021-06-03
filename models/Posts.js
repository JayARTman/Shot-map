const { Model, DataTypes } = require('sequelize');
const express = require('express');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(175),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        references: {
            model: 'User',
            key: 'id'
        }
    }
},
{
    timeStamps: true,
    freezeTable: true
});

module.exports = Post;