const axios = require("axios");
const { Localidades } = require("../db");

async function getLocalidades(provincia) {
  const response = await axios.get(
    `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&campos=id,nombre&max=1500`
  );
  const localidades = response.data.municipios.map((municipio) => {
    const nombreSinAcentos = municipio.nombre
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return { id: municipio.id, nombre: nombreSinAcentos };
  });

  return { municipios: localidades };
}

module.exports = {
  getLocalidades,
};
