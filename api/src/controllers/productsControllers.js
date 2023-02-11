const { Products } = require("../db");

const getAllProducts = async () => {
  const products = await Products.findAll();
  return products;
};

const getProductByID = async (id) => {
  const product = await Products.findByPk({
    where: {
      id: id,
    },
  });
  return product;
};

const getProductByName = async (name) => {
  const product = await Products.findAll({
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
  size
) => {
  const data = { name, price, description, stock, specie, breed };
  if (!Object.values(data).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    const newProduct = await Products.create({
      ...data,
      weight,
      color,
      size,
    });
    return newProduct;
  }
};

const updateProduct = async (
  name,
  price,
  description,
  stock,
  specie,
  breed,
  qualification,
  weight,
  color,
  size
) => {
  const data = { name, price, description, stock, specie, breed, qualification, weight, color, size };
  if (!Object.values(data).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    const editedProduct = await Products.update({
      ...data
    });
    return editedProduct;
  }
};

const deleteProduct = async (id) => {
  const productDeleted = await Products.update(
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
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
