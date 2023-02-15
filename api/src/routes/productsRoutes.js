const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIDlHandler,
  getFilters,
  postProductHandler,
  putProductHandler,
  deleteProductHandler,
} = require("../handler/productsHandler");
const productsRoutes = Router();

productsRoutes.get("/", getAllProductsHandler);
productsRoutes.get("/filters", getFilters);

productsRoutes.get("/:id", getProductByIDlHandler);
productsRoutes.post("/create", postProductHandler);
productsRoutes.put("/:id", putProductHandler);
productsRoutes.delete("/:id", deleteProductHandler);

module.exports = productsRoutes;
