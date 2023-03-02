const { Router } = require("express");
const {
  postDaycareHandler,
  getDaycaresHandler,
  getDaycareByIDHandler,
  putDaycareHandler,
  deleteDaycareHandler,
} = require("../../handler/servicesHandlers/daycareHandler");
const daycareRoutes = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const authMiddleware = require("../../helpers/authMiddleware");

daycareRoutes.post("/create/:UserId", authMiddleware, postDaycareHandler);
daycareRoutes.get("/", getDaycaresHandler);
daycareRoutes.get("/detail/:id", getDaycareByIDHandler);
daycareRoutes.put(
  "/:id",
  authMiddleware,
  upload.single("img"),
  putDaycareHandler
);
daycareRoutes.delete("/:id", authMiddleware, deleteDaycareHandler);

module.exports = daycareRoutes;
