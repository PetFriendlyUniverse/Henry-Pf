const {
  createStore,
  getAllStore,
  storeFilter,
  getStoreByID,
  updateStore,
  deleteStore,
} = require("../controllers/storeControllers");
const cloudinary = require("cloudinary").v2;

const postStoreHandler = async (req, res) => {
  const data = req.body;
  const file = req.file;
  try {
    const image = await cloudinary.uploader.upload(file.path);
    data.img = image.secure_url;
    const newStore = await createStore(data, file);
    return res.status(200).json(newStore);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const getStoresHandler = async (req, res) => {
  const query = req.query;
  try {
    if (Object.keys(query).length) {
      const stores = await storeFilter(query);
      return res.status(200).json(stores);
    } else {
      const allStores = await getAllStore();
      return res.status(200).json(allStores);
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const getStoreByIDHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const storeDetail = await getStoreByID(id);
    return res.status(200).json(storeDetail);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const putStoreHandler = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const file = req.file;
  try {
    const image = await cloudinary.uploader.upload(file.path);
    data.img = image.secure_url;
    const storeEdited = await updateStore(data, id, file);
    return res.status(200).json(storeEdited);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
const deleteStoreHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const storeDeleted = await deleteStore(id);
    return res.status(200).json(storeDeleted);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  getStoresHandler,
  getStoreByIDHandler,
  postStoreHandler,
  putStoreHandler,
  deleteStoreHandler,
};
