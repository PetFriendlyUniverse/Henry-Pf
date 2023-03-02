const { Router } = require("express");
const {
  postUserHandler,
  loginHandler,
  logoutHandler,
  getUserHandler,
  getUserDetailHandler,
  putUserHandler,
  deleteUserHandler,
  resetConfirmPasswordHandler,
  resetPasswordHandler,
  getUserStore,
  getUserWalker,
  getUserDaycare,
} = require("../handler/userHandler");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const authMiddleware = require("../helpers/authMiddleware");

const userRoutes = Router();
//===> aca estamos en /user
userRoutes.get("/", getUserHandler);
userRoutes.get("/detail/:id", getUserDetailHandler);
userRoutes.get("/store/:id", getUserStore);
userRoutes.get("/walker/:id", getUserWalker);
userRoutes.get("/daycare/:id", getUserDaycare);
userRoutes.post("/create", postUserHandler);
userRoutes.post("/login", loginHandler);
userRoutes.post("/logout", authMiddleware, logoutHandler);
userRoutes.post("/reset-password", resetConfirmPasswordHandler);
userRoutes.put("/change-password/:token", resetPasswordHandler);
userRoutes.put("/:id", upload.single("img"), authMiddleware, putUserHandler);
userRoutes.delete("/:id", deleteUserHandler);

module.exports = userRoutes;
