const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Users extends Model {
    checkPassword(test){
        return bcrypt.compareSync(test, this.password)
    }
}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING(75),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
           async beforeCreate(newUser) {
            newUser.password = await bcrypt.hash(newUser.password, 15);
            return newUser;
            }
        },

        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'users'
    }
);

module.exports = Users;