const { Router } = require("express");
const {
  postUserHandler,
  loginHandler,
  logoutHandler,
  getUserHandler,
  getUserDetailHandler,
  putUserHandler,
  deleteUserHandler,
} = require("../handler/userHandler");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const userRoutes = Router();
//===> aca estamos en /user
userRoutes.post("/create", postUserHandler);
userRoutes.post("/login", loginHandler);
userRoutes.post("/logout", logoutHandler);
userRoutes.get("/", getUserHandler);
userRoutes.get("/detail/:id", getUserDetailHandler);
userRoutes.put("/:id", upload.single("img"), putUserHandler);
userRoutes.delete("/:id", deleteUserHandler);

module.exports = userRoutes;
