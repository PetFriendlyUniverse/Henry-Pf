const {
  User,
  Walker,
  Store,
  Daycare,
  Product,
  Invoices_Products,
} = require("../db");

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
  const result = await Invoices_Products.findAll();
  const totals = result.map((invoice) => {
    const total = invoice.amount * invoice.unitPrice;
    return { ...invoice, total };
  });
  const grandTotal = totals.reduce((acc, invoice) => acc + invoice.total, 0);
  return grandTotal;
};

const getEarningsByInvoiceStore = async (idStore) => {};

module.exports = {
  getUser,
  getStore,
  getWalker,
  getDaycare,
  getProducts,
  getUserFilter,
  getEarningsByInvoices,
};
