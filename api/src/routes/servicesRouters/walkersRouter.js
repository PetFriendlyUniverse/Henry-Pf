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

walkersRoutes.post("/create", upload.single("img"), postWalkersHandler);
walkersRoutes.get("/", getWalkersHandler);
walkersRoutes.get("/detail/:id", getWalkersDetailHandler);
walkersRoutes.put("/:id", upload.single("img"), putWalkersHandler);
walkersRoutes.delete("/:id", deleteWalkersHandler);

module.exports = walkersRoutes;
