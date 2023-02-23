const { Router } = require("express");
const {
  postUserHandler,
  getUserHandler,
  putUserHandler,
  deleteUserHandler,
  getUserDetailHandler,
  loginHandler,
  logoutHandler,
} = require("../handler/userHandler");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const userRoutes = Router();
//===> aca estamos en /user
userRoutes.get("/", getUserHandler);
userRoutes.get("/detail/:id", getUserDetailHandler);
userRoutes.post("/create", postUserHandler);
userRoutes.put("/:id", upload.single("img"), putUserHandler);
userRoutes.delete("/:id", deleteUserHandler);

userRoutes.post("/login", loginHandler);
userRoutes.post("/logout", logoutHandler);

module.exports = userRoutes;
