const {} = require("../controllers/commentsController");
const { addFavoriteProduct } = require("../controllers/favoriteController");

const postFavorite = async (req, res) => {
  const { idUser, idProduct } = req.params;
  try {
    console.log(idUser);
    const productAddFavorite = await addFavoriteProduct({ idUser, idProduct });
    return res.status(200).json(productAddFavorite);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  postFavorite,
};
