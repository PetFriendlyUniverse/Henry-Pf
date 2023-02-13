const {} = require("../controllers/commentsController");
const {
  addFavoriteProduct,
  searchFavorite,
  deleteFavoriteById,
} = require("../controllers/favoriteController");

const postFavorite = async (req, res) => {
  const { idUser, idProduct } = req.params;
  try {
    const productAddFavorite = await addFavoriteProduct({ idUser, idProduct });
    return res.status(200).json(productAddFavorite);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const getFavorite = async (req, res) => {
  const { idUser, idProduct } = req.params;
  try {
    let search;
    if (idUser) {
      search = await searchFavorite(idUser);
    } else if (idProduct) {
      search = await searchFavorite(idProduct);
    }
    return res.status(200).json(search);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const deleteFavorite = async (req, res) => {
  const { idUser } = req.params;
  try {
    const favorite = await deleteFavoriteById(idUser);
    res.status(200).json(favorite);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  postFavorite,
  getFavorite,
  deleteFavorite,
};
