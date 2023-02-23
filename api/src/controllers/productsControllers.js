const { Op } = require("sequelize");
const { Product, Store, Brands, Breeds, Species, Colors } = require("../db");

const getAllProducts = async () => {
  const products = await Product.findAll({
    attributes: ["id", "name", "price", "img", "weight", "brand", "stock"],
    where: {
      enabled: true,
    },
  });
  return products;
};

const getProductFilter = async (query) => {
  query.attributes = ["id", "name", "price", "img", "weight", "brand", "stock"];
  if (!!query.where?.name) {
    query.where.name = { [Op.iLike]: `%${query.where.name}%` };
  }
  if (query.where?.priceCondition == "gt") {
    query.where.price = { [Op.gt]: query.where.price };
  } else if (query.where?.priceCondition == "lt") {
    query.where.price = { [Op.lt]: query.where.price };
  }
  delete query.where.priceCondition;
  // Agregar condición para "enable" igual a true
  query.where.enabled = true;
  const products = await Product.findAll(query);
  return products;
};
const getProductByID = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};
// color, peso, imagen, tamaño  => extra
const createProduct = async (requiredData, extraData) => {
  await Brands.findOrCreate({
    where: { id: requiredData.brand },
  });
  await Breeds.findOrCreate({
    where: { id: requiredData.breed },
  });
  await Species.findOrCreate({
    where: { id: requiredData.specie },
  });
  if (extraData?.color)
    await Colors.findOrCreate({
      where: { id: extraData.color },
    });
  const store = Store.findByPk(requiredData.storeId);
  if (!store) {
    throw new Error("Store doesnt exist");
  }
  if (!Object.values(requiredData).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    const newProduct = await Product.create({
      StoreId: requiredData.storeId,
      ...requiredData,
      ...extraData,
    });
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

const getFiltersBD = async () => {
  const filters = []; // [{colors:["blue","red"]}]
  filters.push(["Breeds", await Breeds.findAll()]);
  filters.push(["Brands", await Brands.findAll()]);
  filters.push(["Species", await Species.findAll()]);
  // filters.push({ Colors: await Colors.findAll() });  // pendiente

  return filters;
};

module.exports = {
  getAllProducts,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductFilter,
  getFiltersBD,
};
