const { Router } = require("express");
const {
  postUserHandler,
  getUserHandler,
  putUserHandler,
  deleteUserHandler,
  getUserDetailHandler,
} = require("../handler/userHandler");

const userRoutes = Router();
//===> aca estamos en /user
userRoutes.get("/", getUserHandler);
userRoutes.get("/detail/:id", getUserDetailHandler);

userRoutes.post("/create", postUserHandler);

userRoutes.put("/:id", putUserHandler);

userRoutes.delete("/:id", deleteUserHandler);

module.exports = userRoutes;
