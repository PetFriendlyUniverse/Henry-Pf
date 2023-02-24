const {
  getAllProducts,
  getProductByID,
  getProductFilter,
  createProduct,
  updateProduct,
  deleteProduct,
  getFiltersBD,
  getProductsByStore,
} = require("../controllers/productsControllers");
const {
  queryMarker,
  pagination,
  splitData,
  addFixedsFilters,
} = require("../helpers/productsHelpers");
const cloudinary = require("cloudinary").v2;

const postProductHandler = async (req, res) => {
  const data = req.body;
  const file = req.file;
  try {
    // const nueva = JSON.parse(req.body.data); solo se usa para cuando se quiere probar en insomnia
    const { requiredData, extraData } = splitData(data);
    const image = await cloudinary.uploader.upload(file.path);
    extraData.img = image.secure_url;
    const newProduct = await createProduct(requiredData, extraData, file);
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const getAllProductsHandler = async (req, res) => {
  const query = req.query;
  // console.log(query); // { pq: '2', page: '1' }
  try {
    const { paramsConsult, paginationParams } = queryMarker(query);
    let all;
    if (!paramsConsult) {
      all = await getAllProducts();
    } else {
      // console.log(paramsConsult);
      all = await getProductFilter(paramsConsult);
    }

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

/*
const postProductHandler = async (req, res) => {
  const data = req.body;
  const file = req.file;
  try {
    //const nueva = JSON.parse(req.body.data); //solo se usa para cuando se quiere probar en insomnia
    const { requiredData, extraData } = splitData(nueva);
    const image = await cloudinary.uploader.upload(file.path);
    extraData.img = image.secure_url;
    const newProduct = await createProduct(requiredData, extraData, file);
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
*/
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

const getFilters = async (req, res) => {
  try {
    const filters = await getFiltersBD();
    addFixedsFilters(filters);
    return res.status(200).json(filters);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const getProductByIDStorelHandler = async (req, res) => {
  const { storeId } = req.params;
  try {
    const productsByStore = await getProductsByStore(storeId);
    return res.status(200).json(productsByStore);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  getAllProductsHandler,
  getProductByIDlHandler,
  getFilters,
  postProductHandler,
  putProductHandler,
  deleteProductHandler,
  getProductByIDStorelHandler,
};
