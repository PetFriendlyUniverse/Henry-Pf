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
  qualification,
  specie,
  breed,
  weight,
  color,
  size
) => {
  if (!name || !price || !description || !stock || !specie || !breed) {
    throw new Error("Missing data");
  } else {
    const newProduct = await Products.create({
      name,
      price,
      description,
      stock,
      qualification,
      specie,
      breed,
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
  qualification,
  specie,
  breed,
  weight,
  color,
  size
) => {
  if (!name || !price || !description || !stock || !specie || !breed) {
    throw new Error("Missing data");
  } else {
    const editedProduct = await Products.update({
      name,
      price,
      description,
      stock,
      qualification,
      specie,
      breed,
      weight,
      color,
      size,
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
