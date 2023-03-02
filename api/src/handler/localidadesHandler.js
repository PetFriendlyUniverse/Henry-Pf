const { getLocalidades } = require("../controllers/localidadesController");

const getLocalidadesHandler = async (req, res) => {
  const { provincia } = req.query;
  try {
    const localidades = await getLocalidades(provincia);
    return res.status(200).send(localidades);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getLocalidadesHandler };
