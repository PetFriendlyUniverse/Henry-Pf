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
      name_store: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      area_code_store: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number_store: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      locality: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      street_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          lent: [5, 30],
        },
      },
      street_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
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
