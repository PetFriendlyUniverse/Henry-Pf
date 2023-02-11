// modelo de factura de usuario
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
  sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,30]
      }
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,15]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,20]
      }
    },
  });
};