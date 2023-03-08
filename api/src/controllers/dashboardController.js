const {
  User,
  Walker,
  Store,
  Daycare,
  Product,
  Invoices_Products,
  Invoices,
} = require("../db");
const { Op } = require("sequelize");

const getList = async () => {
  const models = {
    User,
    Walker,
    Store,
    Daycare,
  };

  const modelList = {};

  for (const modelName in models) {
    const model = models[modelName];
    const list = await model.findAll();
    modelList[modelName] = list.map((item) => item.toJSON());
  }

  return modelList;
};

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
      where: { name: { [Op.like]: `%${name}%` } },
    });
    return store;
  } else if (type === "walker") {
    const walker = await Walker.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
    });
    return walker;
  } else if (type === "daycare") {
    const daycare = await Daycare.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
    });
    return daycare;
  } else if (name) {
    const user = await User.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
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
const getEarningsByInvoiceStore = async (storeId) => {
  try {
    const invoices = await Invoices.findAll({
      include: [
        {
          model: Product,
          through: {
            attributes: ["unitPrice", "amount"],
          },
          where: {
            StoreId: storeId,
          },
        },
      ],
    });
    let grandTotal = 0;
    invoices.forEach((invoice) => {
      const total = invoice.Products.reduce((acc, product) => {
        return (
          acc +
          product.Invoices_Products.unitPrice * product.Invoices_Products.amount
        );
      }, 0);
      invoice.total = total;
      grandTotal += total;
    });

    return grandTotal;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  getUser,
  getStore,
  getWalker,
  getDaycare,
  getProducts,
  getUserFilter,
  getEarningsByInvoices,
  getEarningsByInvoiceStore,
  getList,
};
