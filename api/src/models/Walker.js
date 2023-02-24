const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Walker",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 500],
        },
      },
      neighborhood: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 100],
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
