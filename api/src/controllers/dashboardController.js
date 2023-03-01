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
  if (type === "store") {
    const store = await Store.findAll({
      where: { name },
    });
    return store;
  } else if (type === "walker") {
    const walker = await Walker.findAll({
      where: { name },
    });
    return walker;
  } else if (type === "daycare") {
    const daycare = await Daycare.findAll({
      where: { name },
    });
    return daycare;
  } else {
    const user = await User.findAll({
      where: { name },
    });
    return user;
  }
};

const getEarningsByInvoices = async () => {
  const result = await Invoice.findAll({
    include: [
      {
        model: Product,
        as: "Products",
      },
    ],
    attributes: [
      [
        Sequelize.fn(
          "sum",
          Sequelize.col("Products.Invoices_Products.unitPrice")
        ),
        "total",
      ],
    ],
  });

  return result[0].dataValues.total;
};

module.exports = {
  getUser,
  getStore,
  getWalker,
  getDaycare,
  getProducts,
  getUserFilter,
  getEarningsByInvoices,
};
