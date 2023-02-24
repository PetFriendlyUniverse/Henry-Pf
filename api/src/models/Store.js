// modelo de stores
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Store",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area_code_store: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
      zip_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      street_name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          lent: [5, 30],
        },
      },
      street_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 2000],
        },
      },
      img: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 500],
        },
      },
      qualification: {
        type: DataTypes.FLOAT,
      },
      enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
