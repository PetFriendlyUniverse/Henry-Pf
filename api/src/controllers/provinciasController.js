const axios = require("axios");
const { Provincia } = require("../db");

async function getProvincias() {
  const response = await axios.get(
    "https://apis.datos.gob.ar/georef/api/provincias?orden=nombre"
  );
  const provincias = response.data.provincias.map(({ id, nombre }) => ({
    id,
    nombre,
  }));
  await Provincia.bulkCreate(provincias);
  console.log(provincias);
}

module.exports = {
  getProvincias,
};
