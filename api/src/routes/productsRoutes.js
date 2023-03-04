const { Router } = require("express");
const {
  postProductHandler,
  getAllProductsHandler,
  getProductByIDlHandler,
  getFilters,
  putProductHandler,
  deleteProductHandler,
  getProductByIDStorelHandler,
} = require("../handler/productsHandler");
const productsRoutes = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const authMiddleware = require("../helpers/authMiddleware");

productsRoutes.get("/", getAllProductsHandler);
productsRoutes.get("/filters", getFilters);
productsRoutes.get("/:id", getProductByIDlHandler);

productsRoutes.get("/store/:storeId", getProductByIDStorelHandler);

productsRoutes.post("/create", upload.array("img"), postProductHandler);
productsRoutes.put("/:id", authMiddleware, putProductHandler);
productsRoutes.delete("/:id", authMiddleware, deleteProductHandler);

module.exports = productsRoutes;
