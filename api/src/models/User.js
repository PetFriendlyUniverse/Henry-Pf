// modelo de factura de usuario
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 15],
        },
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
        },
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20],
        },
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 20],
        },
      },
      emergencyphone: {
        type: DataTypes.INTEGER,
        validate: {
          len: [1, 20],
        },
      },
      province: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30],
        },
      },
      locality: {
        type: DataTypes.STRING,
        validate: {
          lent: [1, 30],
        },
      },
      enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
