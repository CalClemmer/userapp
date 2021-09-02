'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Toy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Toy.belongsToMany(models.Pet, {through: 'PetsToys', foreignKey: 'petId'});
    }
  };
  Toy.init({
    type: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Toy',
  });
  return Toy;
};