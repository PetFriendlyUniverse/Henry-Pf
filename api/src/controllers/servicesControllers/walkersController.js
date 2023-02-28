const { Walker, User } = require("../../db");

const createWalkers = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error(`No se pudo encontrar el usuario con ID ${userId}`);
  } else {
    await User.update(
      { walker: true },
      {
        where: {
          id: userId,
        },
      }
    );
    const walker = await Walker.create();
    await walker.setUser(user);
    await User.update(
      { walkerId: walker.id },
      {
        where: {
          id: userId,
        },
      }
    );
    return walker;
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
