const axios = require("axios");
const { Localidades } = require("../db");

async function getLocalidades() {
  const localidadesDb = await Localidades.findAll();
  if (localidadesDb.length > 0) {
    return localidadesDb;
  }
  const response = await axios.get(
    "https://apis.datos.gob.ar/georef/api/localidades?orden=nombre&max=5000"
  );
  const localidades = response.data.localidades.map(({ id, nombre }) => ({
    id,
    nombre,
  }));
  await Localidades.bulkCreate(localidades);
  return localidades;
}

module.exports = {
  getLocalidades,
};
