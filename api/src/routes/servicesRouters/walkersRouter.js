const { Router } = require("express");
const {
  postWalkersHandler,
  getWalkersHandler,
  getWalkersDetailHandler,
  putWalkersHandler,
  deleteWalkersHandler,
} = require("../../handler/servicesHandlers/walkersHandler");
const walkersRoutes = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const authMiddleware = require("../../helpers/authMiddleware");

walkersRoutes.post("/create/:UserId", authMiddleware, postWalkersHandler);
walkersRoutes.get("/", getWalkersHandler);
walkersRoutes.get("/detail/:id", getWalkersDetailHandler);
walkersRoutes.put(
  "/:id",
  authMiddleware,
  upload.single("img"),
  putWalkersHandler
);
walkersRoutes.delete("/:id", authMiddleware, deleteWalkersHandler);

module.exports = walkersRoutes;
