const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Breeds",
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
