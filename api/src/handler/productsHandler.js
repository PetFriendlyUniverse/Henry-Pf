const {
  getAllProducts,
  getProductByID,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsControllers");

const getAllProductsHandler = async (req, res) => {
  try {
    all = await getAllProducts();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const getProductByIDlHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const productDetail = await getProductByID(id);
    return res.status(200).json(productDetail);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const getProductByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const productName = await getProductByName(name);
    return res.status(200).json(productName);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const postProductHandler = async (req, res) => {
  const {
    name,
    price,
    description,
    stock,
    specie,
    breed,
    weight,
    color,
    size,
    storeId,
  } = req.body;
  try {
    const newProduct = await createProduct(
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
    );
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const putProductHandler = async (req, res) => {
  const {
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
  } = req.body;
  try {
    const productEdited = await updateProduct(
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
    );
    return res.status(200).json(productEdited);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const deleteProductHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const productToDelete = await deleteProduct(id);
    return res.status(200).json(productToDelete);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  getAllProductsHandler,
  getProductByIDlHandler,
  getProductByNameHandler,
  postProductHandler,
  putProductHandler,
  deleteProductHandler,
};
