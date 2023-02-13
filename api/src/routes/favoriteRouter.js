const { Router } = require("express");
const {
  postFavorite,
  getFavorite,
  deleteFavorite,
} = require("../handler/favoriteHandler");

const favoriteRouter = Router();

favoriteRouter.get("/:idUser", getFavorite);
favoriteRouter.post("/create/:idUser/:idProduct", postFavorite);
favoriteRouter.delete("/:idProduct", deleteFavorite);

module.exports = favoriteRouter;
