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
        allowNull: true,
        validate: {
          len: [1, 50],
        },
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 30],
        },
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 30],
        },
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 50],
        },
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 100],
        },
      },
      area_code: {
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
          len: [5, 30],
        },
      },
      street_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      img: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 500],
        },
      },
      area_code_emergency: {
        type: DataTypes.INTEGER,
        validate: {
          len: [1, 4],
        },
      },
      emergency_number: {
        type: DataTypes.INTEGER,
        validate: {
          len: [1, 20],
        },
      },
      veterinary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      walker: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      daycare: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      store: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: true }
  );
};
