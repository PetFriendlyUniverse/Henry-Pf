const { Router } = require("express");
const {
  getCountUser,
  getCountStore,
  getCountWalker,
  getCountDaycare,
  getCountProducts,
} = require("../handler/datesHandler");

const datesRouter = Router();

datesRouter.get("/users", getCountUser);
datesRouter.get("/stores", getCountStore);
datesRouter.get("/walkers", getCountWalker);
datesRouter.get("/daycares", getCountDaycare);
datesRouter.get("/products", getCountProducts);

module.exports = datesRouter;
