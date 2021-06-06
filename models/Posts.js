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
        title: {
            type: DataTypes.STRING(175),
            allowNull: false
        },
        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'cities',
                key: 'id'
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
        }
    }
        // photo: {
        //     references: {
        //         type: DataTypes.STRING,
        //         references: {
        //             model: 'Photo',
        //             key: 'id'
        //         }
        //     }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'posts'
});

module.exports = Posts;