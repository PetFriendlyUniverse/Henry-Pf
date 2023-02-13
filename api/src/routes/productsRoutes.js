const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIDlHandler,
  getProductByNameHandler,
  postProductHandler,
  putProductHandler,
  deleteProductHandler,
  getProductFilter,
} = require("../handler/productsHandler");
const productsRoutes = Router();

productsRoutes.get("/", getAllProductsHandler);
productsRoutes.get("/name", getProductByNameHandler);
productsRoutes.get("/:id", getProductByIDlHandler);
productsRoutes.post("/create", postProductHandler);
productsRoutes.put("/:id", putProductHandler);
productsRoutes.delete("/:id", deleteProductHandler);

module.exports = productsRoutes;
