const { Product, User, Favorite } = require("../db");

const searchFavorite = async ({ idUser, idProduct }) => {
  const findFavorite = await Favorite.findByPk(idUser || idProduct);
  return findFavorite;
};

const addFavoriteProduct = async ({ idUser, idProduct }) => {
  const user = await User.findByPk(idUser);
  if (!user) {
    throw new Error("User not found");
  }
  const product = await Product.findByPk(idProduct);
  if (!product) {
    throw new Error("Product not found");
  }

  const favorite = await Favorite.create({
    UserId: user.id,
    ProductId: product.id,
  });
  return favorite;
};

const deleteFavoriteById = async (idUser) => {
  const favorite = await Favorite.findByPk(idUser);
  await favorite.destroy();
  return favorite;
};

module.exports = {
  addFavoriteProduct,
  searchFavorite,
  deleteFavoriteById,
};
