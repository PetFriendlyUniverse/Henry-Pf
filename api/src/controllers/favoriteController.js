const { Product, User, Favorite } = require("../db");

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

module.exports = {
  addFavoriteProduct,
};
