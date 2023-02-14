const { Router } = require("express");
const {
  getWalkersHandler,
  getWalkersDetailHandler,
  putWalkersHandler,
  deleteWalkersHandler,
  postWalkersHandler,
} = require("../../handler/servicesHandlers/walkersHandler");

const walkersRoutes = Router();

walkersRoutes.get("/", getWalkersHandler);
walkersRoutes.post("/create", postWalkersHandler);
walkersRoutes.get("/detail/:id", getWalkersDetailHandler);
walkersRoutes.put("/:id", putWalkersHandler);
walkersRoutes.delete("/:id", deleteWalkersHandler);

module.exports = walkersRoutes;
