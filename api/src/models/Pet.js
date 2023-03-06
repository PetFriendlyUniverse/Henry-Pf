// modelo de factura de usuario
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Pet",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      size: {
        type: DataTypes.STRING,
      },
      specie: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      race: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: true }
  );
};
