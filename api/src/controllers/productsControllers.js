const { Op } = require("sequelize");
const { Product, Store } = require("../db");

const getAllProducts = async () => {
  const products = await Product.findAll({
    where: {
      enabled: true,
    },
  });
  return products;
};

const getProductFilter = async (query) => {
  if (!!query.where?.name) {
    query.where?.name = { [Op.iLike]: `%${query.where.name}%` };
  }
  if (query.where?.priceCondition == "gt") {
    query.where?.price = { [Op.gt]: query.where.price };
  } else if (query.where?.priceCondition == "lt") {
    query.where?.price = { [Op.lt]: query.where.price };
  }
  delete query.where.priceCondition;
  // Agregar condición para "enable" igual a true
  query.where.enabled = true;
  const products = await Product.findAll(query);
  return products;
};
const getProductByID = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const createProduct = async (requiredData, extraData) => {
  const store = Store.findByPk(requiredData.storeId);
  if (!store) {
    throw new Error("Store doesnt exist");
  }
  if (!Object.values(requiredData).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    const newProduct = await Product.create({
      StoreId: requiredData.storeId,
      ...requiredData,
      ...extraData,
    });
    return newProduct;
  }
};

const updateProduct = async (id, data) => {
  if (!Object.values(data).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    await Product.update(
      { ...data },
      {
        where: { id: id },
      }
    );
    const editedProduct = await Product.findByPk(id);
    return editedProduct;
  }
};

const deleteProduct = async (id) => {
  const productDeleted = await Product.update(
    { enabled: false },
    {
      where: {
        id,
      },
    }
  );
  return productDeleted;
};

module.exports = {
  getAllProducts,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductFilter,
};
