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

const deletedWalkersById = async (id) => {
  if (!id) throw Error("Wrong Id");
  const update = await Walker.update({ enable: false }, { where: { id: id } });
  const walker = await Walker.findOne({ where: { id: id } });
  return [walker];
};

const approvedWalkersById = async (id) => {
  if (!id) throw Error("Wrong Id");
  const update = await Walker.update({ enable: true }, { where: { id: id } });
  const walker = await Walker.findOne({ where: { id: id } });
  return [walker];
};

const filterWalkers = async (query) => {
  let whereClause = {};
  if (query.province) {
    whereClause.province = query.province;

    if (query.locality) {
      whereClause.locality = query.locality;
    }
  }

  const walkers = await Walker.findAll({
    where: whereClause,
  });

  return walkers;
};

module.exports = {
  getAllWalkers,
  getWalkersById,
  updateWalkers,
  deletedWalkersById,
  filterWalkers,
  createWalkers,
  approvedWalkersById,
};
