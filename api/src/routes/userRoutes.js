const { Router } = require("express");
const {
  postUserHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../handler/userHandler");

const userRoutes = Router();
//===> aca estamos en /user
userRoutes.post("/create", postUserHandler);

userRoutes.get("/", getUserHandler);

userRoutes.put("/:id", updateUserHandler);

userRoutes.delete("/:id", deleteUserHandler);

module.exports = userRoutes;
