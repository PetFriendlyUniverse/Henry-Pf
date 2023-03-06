const { Op, QueryTypes } = require("sequelize");
const { sequelize } = require("../db");
const { Store, User, Product, Review } = require("../db");

const createStore = async (userId, data) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error(`No se pudo encontrar el usuario con ID ${userId}`);
  } else {
    await User.update(
      { store: true },
      {
        where: {
          id: userId,
        },
      }
    );
    const store = await Store.create(data);
    await store.setUser(user);
    await User.update(
      { storeId: store.id },
      {
        where: {
          id: userId,
        },
      }
    );
    return store;
  }
};

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
  const store = await Store.findOne({
    where: {
      id,
    },
    // include: {
    //   model: Product,
    //   attributes: ["id"],
    //   include: {
    //     model: Review,
    //     attributes: ["comment", "qualification"],
    //   },
    // },
  });

  const averages = await sequelize.query(
    `
  select AVG(r.qualification) as "qualificationAVG", AVG(r.dispatchtime) as "dispatchtimeAVG", AVG(r.support) as "supportAVG"
  from "Products" as p
  inner join "Reviews" as r
  on p.id = r."ProductId"
  where "StoreId"=${id}
  ;`,
    {
      type: QueryTypes.SELECT,
    }
  );

  return { store, averages };
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
