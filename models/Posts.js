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
        citybity: {
            type: DataTypes.STRING(),
            allowNull: false,
            references: {
                model: 'cities',
                key: 'id'
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
        timeStamps: true,
        freezeTable: true,
        modelName: 'posts'
});

module.exports = Posts;