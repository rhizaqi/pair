'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

  }
  Profile.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  Profile.addHook('beforeCreate', (profile) =>{
    const hash = bcrypt.hashSync(profile.password)

    profile.password = hash
  })
  return Profile;
};