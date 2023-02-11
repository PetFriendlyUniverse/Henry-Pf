// modelo de la tabla intermedia que queremos que no se genere automaticamente debido que necesitamos una prop adicional para poder generar un detalle de la cantidad de productos
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => { 
  sequelize.define("Invoices_Products", {
    amount: {
      type: DataTypes.INTEGER, // este es la prop adicional que necesitamos
      validate: {
        min: 1,
      },
    },
  });
};

//fijarse que creen las FK correctamente
