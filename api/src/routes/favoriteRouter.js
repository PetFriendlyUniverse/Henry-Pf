const { Router } = require("express");
const {
  postFavorite,
  getFavorite,
  deleteFavorite,
} = require("../handler/favoriteHandler");

const favoriteRouter = Router();

favoriteRouter.get("/:idUser/:idProduct", getFavorite);
favoriteRouter.post("/create/:idUser/:idProduct", postFavorite);
favoriteRouter.delete("/:idUser", deleteFavorite);

module.exports = favoriteRouter;
