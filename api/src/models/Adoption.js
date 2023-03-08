const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Adoption",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 30],
        },
      },
      locality: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 30],
        },
      },
      img: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 500],
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10, 200],
        },
      },
      enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { updatedAt: false }
  );
};
