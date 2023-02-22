const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Brands",
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
