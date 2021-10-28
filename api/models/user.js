'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // each user has can have more than one course
      User.hasMany(models.Course, {
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Please enter your first name',
          },
          notNull: {
            msg: 'Please enter your first name',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Please enter your last name',
          },
          notNull: {
            msg: 'Please enter your last name',
          },
        },
      },

      emailAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Email address already exists. Please login or try a different email address.',
        },
        validate: {
          notEmpty: {
            msg: 'Please enter your email address',
          },
          notNull: {
            msg: 'Please enter your email address',
          },
          isEmail: {
            msg: 'Please enter a valid email address',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Please enter a password',
          },
          notNull: {
            msg: 'Please enter a password',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
