const { Router } = require("express");
const {
  postUserHandler,
  loginHandler,
  logoutHandler,
  getUserHandler,
  getUserDetailHandler,
  putUserHandler,
  deletedUserHandler,
  resetConfirmPasswordHandler,
  resetPasswordHandler,
  getUserStore,
  getUserWalker,
  getUserDaycare,
  approvedUserHandler,
} = require("../handler/userHandler");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const authMiddleware = require("../helpers/authMiddleware");

const userRoutes = Router();
//===> aca estamos en /user
userRoutes.get("/", getUserHandler);
userRoutes.get("/detail", authMiddleware, getUserDetailHandler);
userRoutes.get("/store", authMiddleware, getUserStore);
userRoutes.get("/walker", authMiddleware, getUserWalker);
userRoutes.get("/daycare/:id", getUserDaycare);
userRoutes.post("/create", postUserHandler);
userRoutes.post("/login", loginHandler);
userRoutes.post("/logout", logoutHandler);
userRoutes.post("/reset-password", resetConfirmPasswordHandler);
userRoutes.put("/change-password/:token", resetPasswordHandler);
userRoutes.put("/:id", upload.single("img"), putUserHandler);
userRoutes.delete("/:id", deletedUserHandler);
userRoutes.put("/confirm/:id", approvedUserHandler);

module.exports = userRoutes;
