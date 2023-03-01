const { getLocalidades } = require("../controllers/localidadesController");

const getLocalidadesHandler = async (req, res) => {
  try {
    await getLocalidades();
    return res.status(200).send("Localidades saved to database");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getLocalidadesHandler };
