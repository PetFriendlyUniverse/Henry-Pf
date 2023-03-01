const axios = require("axios");
const { Provincia } = require("../models");

async function getProvincias() {
  try {
    const response = await axios.get(
      "https://apis.datos.gob.ar/georef/api/provincias?orden=nombre"
    );
    const provincias = response.data.provincias;
    await Provincia.bulkCreate(provincias);
    console.log("Provincias saved to database");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getProvincias,
};
