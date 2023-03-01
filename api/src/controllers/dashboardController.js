const { User, Walker, Store, Daycare, Product } = require("../db");

const getUser = async () => {
  const user = await User.count();
  return user;
};

const getStore = async () => {
  const store = await Store.count();
  return store;
};

const getWalker = async () => {
  const walker = await Walker.count();
  return walker;
};

const getDaycare = async () => {
  const daycare = await Daycare.count();
  return daycare;
};

const getProducts = async () => {
  const products = await Product.count();
  return products;
};

const getUserFilter = async (name, type) => {
  const user = await User.findAll({
    where: { name },
  });
  return user;
};

module.exports = {
  getUser,
  getStore,
  getWalker,
  getDaycare,
  getProducts,
  getUserFilter,
};
