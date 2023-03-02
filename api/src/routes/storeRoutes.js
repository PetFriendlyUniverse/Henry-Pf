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

router.post("/create/:UserId", authMiddleware, postStoreHandler);
router.get("/", getStoresHandler);
router.get("/:id", getStoreByIDHandler);
router.put("/:id", authMiddleware, upload.single("img"), putStoreHandler);
router.delete("/:id", authMiddleware, deleteStoreHandler);

module.exports = router;
