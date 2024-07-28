'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Travel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Travel.hasMany(models.Favorite, { foreignKey: 'travelId' })
    }
  }
  Travel.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name cannot be empty",
        },
        notEmpty: {
          msg: "Name cannot be empty",
        },
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Location cannot be empty",
        },
        notEmpty: {
          msg: "Location cannot be empty",
        },
      },
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Rate cannot be empty",
        },
        notEmpty: {
          msg: "Rate cannot be empty",
        },
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Price cannot be empty",
        },
        notEmpty: {
          msg: "Price cannot be empty",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description cannot be empty",
        },
        notEmpty: {
          msg: "Description cannot be empty",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Image cannot be empty",
        },
        notEmpty: {
          msg: "Image cannot be empty",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Travel',
  });
  return Travel;
};