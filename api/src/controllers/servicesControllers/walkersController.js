const { Walker } = require("../db");

//prettier-ignore
const createWalkers = async (data) => {
  //const data = {phone, neighborhood, streets, price}
  if (!Object.values(data).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    const newWalkers = await Walker.create({
      ...data
    });
    return newWalkers;
  }
};

const getAllWalkers = async () => {
  const walkersList = await Walker.findAll({});
  return walkersList;
};

const getWalkersById = async (id) => {
  const walker = await Walker.findByPk(id);
  return walker;
};

const updateWalkers = async (data, id) => {
  await Walker.update(
    { ...data },
    {
      where: { id: id },
    }
  );
  const updated = await Walker.findByPk(id);
  return updated;
};

const deleteWalkersById = async (id) => {
  if (!id) throw Error("id erroneo");
  const update = await Walker.update({ enable: false }, { where: { id: id } });
  return update ? "Walker eliminado correctamente" : "Walker incorrecto";
};

const filterWalkers = async (query) => {
  if (Object.keys(query).length) {
    const walkers = await Walker.findAll({
      where: query,
    });
    return walkers;
  }
};

module.exports = {
  getAllWalkers,
  getWalkersById,
  updateWalkers,
  deleteWalkersById,
  filterWalkers,
  createWalkers,
};
