const { Router } = require("express");
const {
  postUserHandler,
  getUserHandler,
  putUserHandler,
  deleteUserHandler,
} = require("../handler/userHandler");

const userRoutes = Router();
//===> aca estamos en /user
userRoutes.post("/create", postUserHandler);

userRoutes.get("/", getUserHandler);

userRoutes.put("/:id", putUserHandler);

userRoutes.delete("/:id", deleteUserHandler);

module.exports = userRoutes;
