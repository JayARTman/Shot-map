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
    city: {
        type: DataTypes.STRING(),
        allowNull: false,
        references: {
            model: 'City',
            key: 'city_name'
        },
        
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        references: {
            model: 'User',
            key: 'user_name'
        }
    },
    photo: {
        references: {
            model: 'Photo',
            key: 'id'
        }
    }
    
},
{
    timeStamps: true,
    freezeTable: true
});

module.exports = Post;