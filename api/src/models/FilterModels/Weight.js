const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Weight",
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
