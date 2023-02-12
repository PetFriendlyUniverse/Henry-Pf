const { Router } = require("express");
const {
  getAllStoreHandler,
  getStoreByIDHandler,
  postStoreHandler,
  putStoreHandler,
  deleteStoreHandler,
} = require("../handler/storeHandler");
const router = Router();

storeRoutes.get("/", getAllStoreHandler);
storeRoutes.get("/:id", getStoreByIDHandler);

storeRoutes.post("/create", postStoreHandler);

storeRoutes.put("/:id", putStoreHandler);

storeRoutes.delete("/:id", deleteStoreHandler);
module.exports = router;
