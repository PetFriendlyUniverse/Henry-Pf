const { Product, Store } = require("../db");

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

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

const createProduct = async (
  name,
  price,
  description,
  stock,
  specie,
  breed,
  weight,
  color,
  size,
  storeId
) => {
  const data = { name, price, description, stock, specie, breed };
  const store = Store.findByPk(storeId);
  if (!store) {
    throw new Error("Store doesnt exist");
  }
  if (!Object.values(data).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    const newProduct = await Product.create({
      ...data,
      weight,
      color,
      size,
    });
    await newProduct.setStore(storeId);

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
  if (query.name) {
    where.name = query.name;
  }
  if (query.weight) {
    where.weight = query.weight;
  }
  if (query.color) {
    where.color = query.color;
  }
  if (query.size) {
    where.size = query.size;
  }
  if (query.specie) {
    where.specie = query.specie;
  }
  if (query.breed) {
    where.breed = query.breed;
  }
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
  productFilter,
};
