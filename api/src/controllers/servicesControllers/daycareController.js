const { Daycare } = require("../db");

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

const createDaycare = async (data) => {
  if (!Object.values(data).every((value) => value)) {
    throw new Error("Missing data");
  } else {
    const newDaycare = await Daycare.create(data);
    return newDaycare;
  }
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
  return daycareDelete
    ? "Store deleted successfully"
    : "Could not delete store";
};

module.exports = {
  createDaycare,
  filterDaycare,
  getAllDaycares,
  getDaycareByID,
  updateDaycare,
  deleteDaycare,
};
