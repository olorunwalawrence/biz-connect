/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  var Signup = sequelize.define('Signup', {
    username: DataTypes.STRING
  }, {});
  Signup.associate = function(models) {
    // associations can be defined here
  };
  return Signup;
};