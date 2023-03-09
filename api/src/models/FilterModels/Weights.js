const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Weights",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
