const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIDlHandler,
  getFilters,
  postProductHandler,
  putProductHandler,
  deleteProductHandler,
} = require("../handler/productsHandler");

const authMiddleware = require("../helpers/authMiddleware");

const productsRoutes = Router();

productsRoutes.get("/", getAllProductsHandler);
productsRoutes.get("/filters", getFilters);

productsRoutes.get("/:id", authMiddleware, getProductByIDlHandler);
productsRoutes.post("/create", authMiddleware, postProductHandler);
productsRoutes.put("/:id", authMiddleware, putProductHandler);
productsRoutes.delete("/:id", authMiddleware, deleteProductHandler);

module.exports = productsRoutes;
