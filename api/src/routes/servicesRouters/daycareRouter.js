const { Router } = require("express");
const {
  postDaycareHandler,
  getDaycaresHandler,
  getDaycareByIDHandler,
  putDaycareHandler,
  deletedDaycareHandler,
  approvedDaycareHandler,
} = require("../../handler/servicesHandlers/daycareHandler");
const daycareRoutes = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

daycareRoutes.post("/create/:UserId", upload.single("img"), postDaycareHandler);
daycareRoutes.get("/", getDaycaresHandler);
daycareRoutes.get("/detail/:id", getDaycareByIDHandler);
daycareRoutes.put("/:id", upload.single("img"), putDaycareHandler);
daycareRoutes.delete("/:id", deletedDaycareHandler);
daycareRoutes.put("/confirm/:id", approvedDaycareHandler);

module.exports = daycareRoutes;
