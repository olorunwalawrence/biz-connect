/* eslint-disable no-unused-vars */

export default (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      // validate: {
      //   notNull: true,
      //   isAlpha: true
      // }
    },
    password: DataTypes.STRING,
    
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    }
  }, {});
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};
