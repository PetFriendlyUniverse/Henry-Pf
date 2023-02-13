const { Walkers } = require("../db");

const getAllWalkers = async () => {
  const walkersList = await Walkers.findAll({});
  return walkersList;
};

const getWalkersById = async (id) => {
  const walker = await Walkers.findByPk(id);
  return walker;
};

const updateWalkers = async (walker, id) => {
  await Walkers.update(
    { ...walker },
    {
      where: { id: id },
    }
  );
  const updated = await Walkers.findByPk(id);
  return updated;
};

const deleteWalkersById = async (id) => {
  if (!id) throw Error("id erroneo");
  const update = await Walkers.update({ enable: false }, { where: { id: id } });
  return update ? "Walker eliminado correctamente" : "Walker incorrecto";
};

const filterWalkers = async (query) => {
  if (Object.keys(query).length) {
    const walkers = await Walkers.findAll({
      where: query,
    });
    return walkers;
  }
}

module.exports = {
  getAllWalkers,
  getWalkersById,
  updateWalkers,
  deleteWalkersById,
  filterWalkers
};
