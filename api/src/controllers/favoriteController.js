const { Product, User, Favorite } = require("../db");

const searchFavorite = async (idUser) => {
  const user = await User.findByPk(idUser);
  if (!user) {
    throw new Error("User not found");
  }
  const favorites = await Favorite.findAll({
    where: {
      UserId: user.id,
    },
  });
  return favorites;
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

const deleteFavoriteById = async (idProduct) => {
  const favorite = await Favorite.findOne({
    where: {
      ProductId: idProduct,
    },
  });
  if (!favorite) {
    throw new Error("Favorite not found");
  }
  await favorite.destroy();
  return favorite;
};

module.exports = {
  addFavoriteProduct,
  searchFavorite,
  deleteFavoriteById,
};
