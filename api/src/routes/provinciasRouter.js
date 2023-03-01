const { Router } = require("express");
const { getProvinciasHandler } = require("../handler/provinciasHandler");

const provinciasRouter = Router();

provinciasRouter.get("/", getProvinciasHandler);

module.exports = provinciasRouter;
