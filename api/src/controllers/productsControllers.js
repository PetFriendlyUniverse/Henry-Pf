const { Op } = require("sequelize");
const { Product, Store } = require("../db");

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

// const getAllProducts = async ({ where, order, prices }) => {
//   if (prices[0] && !prices[1]) where.price = { [Op.gte]: query.prices[0] };
//   if (prices[1] && !prices[0]) where.price = { [Op.lte]: query.prices[1] };
//   if (prices[1] && prices[0]) where.price = { [Op.between]: prices };

//   const products = await Product.findAll({
//     where: where,
//     order: order,
//   });
//   return products;
// };

const getProductByID = async (id) => {
  const product = await Product.findByPk({
    where: {
      id: id,
    },
  });
  return product;
};

const getProductByName = async (name) => {
  const product = await Product.findAll({
    where: {
      name: name,
    },
  });
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
      ...requiredData,
      ...extraData,
    });
    // await newProduct.setStore(requiredData.storeId);
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

const productFilter = async (query) => {
  const where = {};

  if (query.price && query.priceCondition) {
    if (query.priceCondition === "gt") {
      where.price = { [Op.gt]: query.price };
    } else if (query.priceCondition === "lt") {
      where.price = { [Op.lt]: query.price };
    }
  }

  Object.keys(query).forEach((key) => {
    if (key !== "price" && key !== "priceCondition") {
      where[key] = query[key];
    }
  });

  const products = await Product.findAll({
    where: where,
  });
  return products;
};

module.exports = {
  getAllProducts,
  getProductByID,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
