
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Cities extends Model {}

Cities.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        city_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        // },
        // state: {
        //     type: DataTypes.STRING(17),
        //     allowNull: false
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'cities'
});

module.exports = Cities;
