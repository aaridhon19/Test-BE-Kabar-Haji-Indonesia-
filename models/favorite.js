'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.User, { foreignKey: 'userId' })
      Favorite.belongsTo(models.Travel, { foreignKey: 'travelId' })
    }
  }
  Favorite.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "User Id tidak boleh kosong",
        },
        notEmpty: {
          msg: "User Id tidak boleh kosong",
        },
      },
      travelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Travel Id tidak boleh kosong",
          },
          notEmpty: {
            msg: "Travel Id tidak boleh kosong",
          },
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};