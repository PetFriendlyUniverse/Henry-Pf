//modelo de tabla de productos
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // verificar que se cree la FK tienda_id
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10, 5000],
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    specie: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },

    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        min: 0.0,
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 30],
      },
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 7],
      },
    },
    //Trabajamos una propiedad de habilitacion para el borrado logico
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
