const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIDlHandler,
  getProductByNameHandler,
  postProductHandler,
  putProductHandler,
  deleteProductHandler,
} = require("../handler/productsHandler");
const productsRoutes = Router();

productsRoutes.get("/", getAllProductsHandler);
productsRoutes.get("/name", getProductByIDlHandler);
productsRoutes.get("/:id", getProductByNameHandler);
productsRoutes.post("/create", postProductHandler);
productsRoutes.put("/:id", putProductHandler);
productsRoutes.delete("/:id", deleteProductHandler);

module.exports = productsRoutes;
