const { Router } = require("express");
const {
  getAllStoreHandler,
  getStoreByIDHandler,
  postStoreHandler,
  putStoreHandler,
  deleteStoreHandler,
} = require("../handler/storeHandler");
const router = Router();

router.get("/", getAllStoreHandler);
router.get("/:id", getStoreByIDHandler);
router.post("/create", postStoreHandler);
router.put("/:id", putStoreHandler);
router.delete("/:id", deleteStoreHandler);

module.exports = router;
