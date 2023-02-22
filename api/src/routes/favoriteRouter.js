const { Router } = require("express");
const {
  postFavorite,
  getFavorite,
  deleteFavorite,
} = require("../handler/favoriteHandler");

const favoriteRouter = Router();

favoriteRouter.get("/:idUser", getFavorite);
favoriteRouter.post("/create", postFavorite); // :idUser/:idProduct estaba con esto antes
favoriteRouter.delete("/:idProduct", deleteFavorite);

module.exports = favoriteRouter;
