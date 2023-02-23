const { Router } = require("express");
const {
  getDaycaresHandler,
  getDaycareByIDHandler,
  postDaycareHandler,
  putDaycareHandler,
  deleteDaycareHandler,
} = require("../../handler/servicesHandlers/daycareHandler");

const daycareRoutes = Router();

daycareRoutes.get("/", getDaycaresHandler);
daycareRoutes.get("/:id", getDaycareByIDHandler);
daycareRoutes.post("/create", postDaycareHandler);
daycareRoutes.put("/:id", putDaycareHandler);
daycareRoutes.delete("/:id", deleteDaycareHandler);

module.exports = daycareRoutes;
