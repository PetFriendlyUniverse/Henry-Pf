const { Brands } = require("../db");

const getAllBrands = async () => {
  const brands = await Brands.findAll();
  return brands;
};

module.exports = {
  getAllBrands,
};
