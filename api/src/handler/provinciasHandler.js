const { getProvincias } = require("../controllers/provinciasController");

const getProvinciasHandler = async (req, res) => {
  const { provincia } = req.query;
  try {
    const provincias = await getProvincias(provincia);
    return res.status(200).send(provincias);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getProvinciasHandler };
