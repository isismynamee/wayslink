'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      link.belongsTo(models.user, {
        foreignKey: "idUser",
        as: "user"
      }),
      link.hasMany(models.creative, {
        foreignKey: "idLink",
        as: "link"
      })
    }
  }
  link.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'link',
  });
  return link;
};