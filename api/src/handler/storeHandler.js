const {
  getAllStore,
  storeFilter,
  getStoreByID,
  createStore,
  updateStore,
  deleteStore,
} = require("../controllers/storeControllers");

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
const postStoreHandler = async (req, res) => {
  const data = req.body;
  try {
    const newStore = await createStore(data);
    return res.status(200).json(newStore);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
const putStoreHandler = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  try {
    const storeEdited = await updateStore(data, id);
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
