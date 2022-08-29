'use strict';

const User = (sequelize, DataTypes) => {
  const User = sequelize.define ('User', {
    id: DataTypes.INTERGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    displayName: DataTypes.STRING,
    image: DataTypes.STRING,
  })
  return User;
};

module.exports = User;
