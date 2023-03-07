const { Router } = require("express");
const {
  getCountUser,
  getCountStore,
  getCountWalker,
  getCountDaycare,
  getCountProducts,
  getFilterUsers,
  getEarnings,
  getEarningsByStore,
  getHandlerList,
} = require("../handler/dashboardHandler");

const dashboardRouter = Router();

dashboardRouter.get("/users", getCountUser);
dashboardRouter.get("/stores", getCountStore);
dashboardRouter.get("/walkers", getCountWalker);
dashboardRouter.get("/daycares", getCountDaycare);
dashboardRouter.get("/products", getCountProducts);
dashboardRouter.get("/earnings", getEarnings);
dashboardRouter.get("/earnings/:idStore", getEarningsByStore);
dashboardRouter.get("/filterusers", getFilterUsers);
dashboardRouter.get("/list", getHandlerList);

module.exports = dashboardRouter;
