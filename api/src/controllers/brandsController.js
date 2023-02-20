const { Brands } = require("../db");

const getAllBrands = async () => {
  const brands = await Brands.findAll();
  console.log(brands);
  return brands;
};

module.exports = {
  getAllBrands,
};
