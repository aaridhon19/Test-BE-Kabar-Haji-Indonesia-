'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/brcypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Username cannot be empty",
        },
        notEmpty: {
          msg: "Username cannot be empty",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email already registered",
      },
      validate: {
        notNull: {
          msg: "Email cannot be empty",
        },
        notEmpty: {
          msg: "Email cannot be empty",
        },
        isEmail: {
          msg: "Email must use the email format",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password cannot be empty",
        },
        notEmpty: {
          msg: "Password cannot be empty",
        },
        len: {
          args: [8],
          msg: "Passwords cannot be under 8 letters",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    user.password = hashPassword(user.password);
  });
  return User;
};