'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      creative.belongsTo(models.link, {
        foreignKey: "idLink",
        as: "link"
      })
    }
  }
  creative.init({
  // title sama url ubah jadi array atau json
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    uniquelink: DataTypes.STRING,
    image: DataTypes.STRING,
    viewcount: {
      type: DataTypes.BIGINT,
      defaultValue: 0
    },
    idLink: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'creative',
  });
  return creative;
};