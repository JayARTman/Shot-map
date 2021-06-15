const { Model, DataTypes } = require('sequelize');
const express = require('express');
const sequelize = require('../config/connection');

class Images extends Model {}

Images.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        type: {
            type: DataTypes.STRING,
            allowNull: false
        },    
        name: {
          type: DataTypes.STRING(300),
            allowNull: false,
        },
        path: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'images'
});
    

module.exports = Images;