'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};
