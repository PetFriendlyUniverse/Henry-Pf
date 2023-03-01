const axios = require("axios");
const { Provincia } = require("../db");

async function getProvincias() {
  const response = await axios.get(
    "https://apis.datos.gob.ar/georef/api/provincias?orden=nombre"
  );
  console.log(response);
  const provincias = response.data.provincias;
  await Provincia.bulkCreate(provincias);
  console.log("Provincias saved to database");
}

module.exports = {
  getProvincias,
};
