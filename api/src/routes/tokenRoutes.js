const { Router } = require("express");
const { getTokenHandler } = require("../handler/tokenHandler");

const tokenRouter = Router();

tokenRouter.get("/", getTokenHandler);

module.exports = tokenRouter;
