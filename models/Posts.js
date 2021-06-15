const { Model, DataTypes } = require('sequelize');
const express = require('express');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cities',
                key: 'id'
            }
        },    
        info: {
          type: DataTypes.STRING(300),
            allowNull: false,
        },
        user_name: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }

        },
        photo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'images',
                key: 'id'
            }

        }
        // image: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'posts'
});
    

module.exports = Posts;