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

daycareRoutes.post("/create", upload.single("img"), postDaycareHandler);
daycareRoutes.get("/", getDaycaresHandler);
daycareRoutes.get("/:id", getDaycareByIDHandler);
daycareRoutes.put("/:id", upload.single("img"), putDaycareHandler);
daycareRoutes.delete("/:id", deleteDaycareHandler);

module.exports = daycareRoutes;
