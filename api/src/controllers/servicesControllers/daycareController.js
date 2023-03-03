const { Daycare, User } = require("../../db");

const createDaycare = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error(`No se pudo encontrar el usuario con ID ${userId}`);
  } else {
    await User.update(
      { daycare: true },
      {
        where: {
          id: userId,
        },
      }
    );
    const daycare = await Daycare.create();
    await daycare.setUser(user);
    await User.update(
      { daycareId: daycare.id },
      {
        where: {
          id: userId,
        },
      }
    );
    return daycare;
  }
};

const getAllDaycares = async () => {
  const daycares = await Daycare.findAll();
  return daycares;
};

const filterDaycare = async () => {
  if (Object.keys(query).length) {
    const daycares = await Store.findAll({
      where: query,
    });
    return daycares;
  }
};

const getDaycareByID = async (id) => {
  const daycare = await Daycare.findByPk(id);
  return daycare;
};

const updateDaycare = async (data, id) => {
  if (!Object.values(data).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    await Daycare.update(
      { ...data },
      {
        where: { id: id },
      }
    );
    const editedDaycare = await Daycare.findByPk(id);
    return editedDaycare;
  }
};

const deletedDaycare = async (id) => {
  if (!id) throw Error("Wrong Id");
  const update = await Daycare.update({ enable: false }, { where: { id: id } });
  const daycare = await Daycare.findOne({ where: { id: id } });
  return [daycare];
};

const approvedDaycare = async (id) => {
  if (!id) throw Error("Wrong Id");
  const update = await Daycare.update({ enable: true }, { where: { id: id } });
  const daycare = await Daycare.findOne({ where: { id: id } });
  return [daycare];
};

module.exports = {
  createDaycare,
  filterDaycare,
  getAllDaycares,
  getDaycareByID,
  updateDaycare,
  deletedDaycare,
  approvedDaycare,
};
