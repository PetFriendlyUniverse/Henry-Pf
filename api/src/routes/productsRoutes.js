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

productsRoutes.get(
  "/store/:storeId",
  authMiddleware,
  getProductByIDStorelHandler
);

productsRoutes.post(
  "/create",
  authMiddleware,
  upload.array("img"),
  postProductHandler
);
productsRoutes.put(
  "/:id",
  authMiddleware,
  upload.array("img"),
  putProductHandler
);
productsRoutes.delete("/:id", deleteProductHandler);

module.exports = productsRoutes;
