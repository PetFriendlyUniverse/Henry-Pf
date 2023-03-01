const { getLocalidades } = require("../controllers/localidadesController");

const getLocalidadesHandler = async (req, res) => {
  try {
    const localidades = await getLocalidades();
    return res.status(200).send(localidades);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getLocalidadesHandler };
