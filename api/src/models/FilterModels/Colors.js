const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Colors",
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
