const {
  getAllProducts,
  getProductByID,
  // getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsControllers");
const {
  queryMarker,
  pagination,
  splitData,
} = require("../helpers/productsHelpers");

const getAllProductsHandler = async (req, res) => {
  const query = req.query;
  try {
    const { where, order, paginationParams, prices } = queryMarker(query);

    const all = await getAllProducts(where, order, prices);
    const paginated = pagination(all, paginationParams);

    return res.status(200).json(paginated);
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

const postProductHandler = async (req, res) => {
  const data = req.body;
  try {
    const { requiredData, extraData } = splitData(data);
    const newProduct = await createProduct(requiredData, extraData);
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

const putProductHandler = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const productEdited = await updateProduct(id, data);
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
  // getProductByNameHandler,
  postProductHandler,
  putProductHandler,
  deleteProductHandler,
};
