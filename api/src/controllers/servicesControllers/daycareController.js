const { Op } = require("sequelize");
const { Daycare } = require("../db");

const createDaycare = async (data) => {
  const newDaycare = await Daycare.create(data);
  return newDaycare;
};
const filterDaycare = async () => {
  const daycares = await Daycare.findAll({
    query,
  });
  return daycares;
};
const getAllDaycares = async () => {
  const daycares = await Daycare.findAll();
  return daycares;
};
const getDaycareByID = async (id) => {
  const daycares = await Daycare.findByPk(id);
  return daycares;
};
const updateDaycare = async (id, data) => {
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
const deleteDaycare = async (id) => {
  const daycareDelete = await Daycare.update(
    { enabled: false },
    {
      where: {
        id,
      },
    }
  );
  return daycareDelete;
};

module.exports = {
  createDaycare,
  filterDaycare,
  getAllDaycares,
  getDaycareByID,
  updateDaycare,
  deleteDaycare,
};
