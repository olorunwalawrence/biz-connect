/* eslint-disable no-unused-vars */

export default (sequelize, DataTypes) => {
  const login = sequelize.define('login', {
    username: DataTypes.STRING
  }, {});
  login.associate = function (models) {
    // associations can be defined here
  };
  return login;
};