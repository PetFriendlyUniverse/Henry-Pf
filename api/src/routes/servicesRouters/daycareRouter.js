const { Router } = require("express");
const {
  postDaycareHandler,
  getDaycaresHandler,
  getDaycareDetail,
  putDaycareHandler,
  deleteDaycareHandler,
} = require("../../handler/servicesHandlers/daycareHandler");

const daycareRoutes = Router();

daycareRoutes.post("/create", postDaycareHandler);
daycareRoutes.get("/", getDaycaresHandler);
daycareRoutes.get("/detail/:id", getDaycareDetail);
daycareRoutes.put("/:id", putDaycareHandler);
daycareRoutes.delete("/:id", deleteDaycareHandler);

module.exports = daycareRoutes;
