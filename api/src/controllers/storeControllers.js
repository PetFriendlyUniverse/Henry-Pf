const { Store } = require("../db");

const getAllStore = async () => {
  const storesList = await Store.findAll();
  return storesList;
};

const storeFilter = async (query) => {
  if (Object.keys(query).length) {
    const stores = await Store.findAll({
      where: query,
    });
    return stores;
  }
};

const getStoreByID = async (id) => {
  const store = await Store.findByPk(id);
  return store;
};

const createStore = async (data) => {
  if (!Object.values(data).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    const newStore = await Store.create(data);
    return newStore;
  }
};

const updateStore = async (data, id) => {
  if (!Object.values(data).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    await Store.update(
      { ...data },
      {
        where: { id: id },
      }
    );
    const editedStore = await Store.findByPk(id);
    return editedStore;
  }
};

const deleteStore = async (id) => {
  const storeDeleted = await Store.update(
    { enabled: false },
    {
      where: {
        id,
      },
    }
  );
  return storeDeleted ? "Store deleted successfully" : "Could not delete store";
};

module.exports = {
  getAllStore,
  getStoreByID,
  createStore,
  updateStore,
  deleteStore,
  storeFilter,
};
