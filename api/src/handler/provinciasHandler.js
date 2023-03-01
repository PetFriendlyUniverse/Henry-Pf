const { getProvincias } = require("../controllers/provinciasController");

const getProvinciasHandler = async (req, res) => {
  try {
    await getProvincias();
    return res.status(200).send("Provincias saved to database");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getProvinciasHandler };
