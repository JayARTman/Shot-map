const express = require('express')
const { Model, DataTypes } = require('sequelize');
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
            type: DataTypes.STRING()
        },
        original_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        savedAs_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // state: {
        //     type: DataTypes.STRING(17),
        //     allowNull: false
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'images'
});

module.exports = Images;
