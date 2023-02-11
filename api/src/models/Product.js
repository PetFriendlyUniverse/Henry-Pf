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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 100],
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
        len: [1, 10],
      },
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
      },
    },
    //Desde aca para abajo dependera del producto que tipo de propiedad tendra, asi que no es necesario que todas estas propiedades este presente en un producto.
    qualification: {
      type: DataTypes.FLOAT,
      defaultValue: null,
      validate: {
        min: 0.5,
        max: 5.0,
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
        len: [1, 10],
      },
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 3],
      },
    },
    //Trabajamos una propiedad de habilitacion para el borrado logico
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
