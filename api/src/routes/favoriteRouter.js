const { Router } = require("express");
const { postFavorite } = require("../handler/favoriteHandler");

const favoriteRouter = Router();

favoriteRouter.post("/:idUser/:idProduct", postFavorite);

module.exports = favoriteRouter;
