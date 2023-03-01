const { getProvincias } = require("../controllers/provinciasController");

const getProvinciasHandler = async (req, res) => {
  try {
    const provincias = await getProvincias();
    return res.status(200).send(provincias);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getProvinciasHandler };
