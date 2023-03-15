const { Router } = require("express");
const {
  postStoreHandler,
  getStoresHandler,
  getStoreByIDHandler,
  putStoreHandler,
  deleteStoreHandler,
} = require("../handler/storeHandler");
const router = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const authMiddleware = require("../helpers/authMiddleware");

router.post("/create", upload.single("img"), authMiddleware, postStoreHandler);
router.get("/", getStoresHandler);
router.get("/:id", getStoreByIDHandler);
router.put("/:id", upload.single("img"), putStoreHandler);
router.delete("/:id", deleteStoreHandler); // exclusivo de admin

module.exports = router;
