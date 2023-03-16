const { Router } = require("express");
const {
  postWalkersHandler,
  getWalkersHandler,
  getWalkersDetailHandler,
  putWalkersHandler,
  deletedWalkersHandler,
  approvedWalkerHandler,
} = require("../../handler/servicesHandlers/walkersHandler");
const walkersRoutes = Router();

const multer = require("multer");
const authMiddleware = require("../../helpers/authMiddleware");
const upload = multer({ dest: "uploads/" });

walkersRoutes.post(
  "/create",
  authMiddleware,
  upload.single("img"),
  postWalkersHandler
);
walkersRoutes.get("/", getWalkersHandler);
walkersRoutes.get("/detail/:id", getWalkersDetailHandler);
walkersRoutes.put("/:id", upload.single("img"), putWalkersHandler);
walkersRoutes.delete("/:id", deletedWalkersHandler);
walkersRoutes.put("/confirm/:id", approvedWalkerHandler);

module.exports = walkersRoutes;
