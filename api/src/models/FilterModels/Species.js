const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Species",
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
