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

const getAllWalkers = async (page, pq) => {
  const offset = (page - 1) * pq;

  const walkersList = await Walker.findAll({
    limit: pq,
    offset: offset,
  });
  const count = await Walker.count();
  const quantity = Math.ceil(count / pq);

  return { walkersList, quantity };
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

const filterWalkers = async (query, page, pq) => {
  let whereClause = {};
  if (query.province) {
    whereClause.province = query.province;
    if (query.locality) {
      whereClause.locality = query.locality;
    }
  }
  const offset = (page - 1) * pq;
  const walkersList = await Walker.findAll({
    where: whereClause,
    limit: pq,
    offset: offset,
  });
  const count = await Walker.count({ where: whereClause });
  const quantity = Math.ceil(count / pq);
  return { walkersList, quantity };
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
