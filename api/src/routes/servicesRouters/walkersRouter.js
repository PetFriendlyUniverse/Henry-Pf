const { Router } = require("express");
const {
  getWalkersHandler,
  getWalkersDetailHandler,
  putWalkersHandler,
  deleteWalkersHandler,
} = require("../../handler/servicesHandlers/walkersHandler");

const walkersRoutes = Router();

walkersRoutes.get("/", getWalkersHandler);
walkersRoutes.get("/detail/:id", getWalkersDetailHandler);
walkersRoutes.put("/:id", putWalkersHandler);
walkersRoutes.delete("/:id", deleteWalkersHandler);

module.exports = walkersRoutes;
