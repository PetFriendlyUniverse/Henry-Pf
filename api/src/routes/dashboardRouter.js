const { Router } = require("express");
const {
  getCountUser,
  getCountStore,
  getCountWalker,
  getCountDaycare,
  getCountProducts,
  getFilterUsers,
} = require("../handler/dashboardHandler");

const dashboardRouter = Router();

dashboardRouter.get("/users", getCountUser);
dashboardRouter.get("/stores", getCountStore);
dashboardRouter.get("/walkers", getCountWalker);
dashboardRouter.get("/daycares", getCountDaycare);
dashboardRouter.get("/products", getCountProducts);
dashboardRouter.get("/filterusers", getFilterUsers);

module.exports = dashboardRouter;
