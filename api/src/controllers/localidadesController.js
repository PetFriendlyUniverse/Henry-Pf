const axios = require("axios");
const { Localidades } = require("../db");
const CircularJSON = require("circular-json");

async function getLocalidades(provincia) {
  const response = await axios.get(
    `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&campos=id,nombre&max=1500`
  );
  const respuesta = response.data;

  const localidades = CircularJSON.stringify(respuesta);

  return localidades;
}

module.exports = {
  getLocalidades,
};
