const axios = require("axios");
const { Provincia } = require("../db");

async function getProvincias() {
  const provinciasDb = await Provincia.findAll();
  if (provinciasDb.length > 0) {
    return provinciasDb;
  }
  const response = await axios.get(
    "https://apis.datos.gob.ar/georef/api/provincias?orden=nombre"
  );
  const provincias = response.data.provincias.map(({ id, nombre }) => ({
    id,
    nombre,
  }));
  await Provincia.bulkCreate(provincias);
  return provincias;
}

module.exports = {
  getProvincias,
};
