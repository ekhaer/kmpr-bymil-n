'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Article.belongsTo(models.User)
    }
  };
  Article.init({
    author: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Author is required'
        }
      }
    },
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Title is required'
        }
      }
    },
    body: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Body is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};