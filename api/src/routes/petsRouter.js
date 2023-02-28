const { Router } = require("express");
const {
  postPetsHandler,
  getPetsHandlerByUser,
} = require("../handler/petsHandler");

const petsRouter = Router();

//===> aca estamos en /user
petsRouter.post("/create/:userId", postPetsHandler);
petsRouter.get("/:userId", getPetsHandlerByUser);

module.exports = petsRouter;
