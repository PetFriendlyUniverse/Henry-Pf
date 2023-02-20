const { Router } = require("express");
const { getAllBrandsHandler } = require("../handler/brandsHandler");

const brandsRoutes = Router();

brandsRoutes.get("/", getAllBrandsHandler);

module.exports = brandsRoutes;
