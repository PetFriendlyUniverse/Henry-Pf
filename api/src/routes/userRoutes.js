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
} = require("../handler/userHandler");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const userRoutes = Router();
//===> aca estamos en /user
userRoutes.get("/", getUserHandler);
userRoutes.get("/detail/:id", getUserDetailHandler);
userRoutes.get("/store/:id", getUserStore);
userRoutes.post("/create", postUserHandler);
userRoutes.post("/login", loginHandler);
userRoutes.post("/logout", logoutHandler);
userRoutes.post("/reset-password", resetConfirmPasswordHandler);
userRoutes.put("/change-password/:token", resetPasswordHandler);
userRoutes.put("/:id", upload.single("img"), putUserHandler);
userRoutes.delete("/:id", deleteUserHandler);

module.exports = userRoutes;
