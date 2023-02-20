const { getAllBrands } = require("../controllers/brandsController");

const getAllBrandsHandler = async (req, res) => {
  try {
    const brands = await getAllBrands();
    return res.status(200).json(brands);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = { getAllBrandsHandler };
