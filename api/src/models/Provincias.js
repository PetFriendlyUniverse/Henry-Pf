const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Provincia", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  });
};
