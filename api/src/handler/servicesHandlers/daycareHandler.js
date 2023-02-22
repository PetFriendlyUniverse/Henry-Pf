const {
  createDaycare,
  filterDaycare,
  getAllDaycares,
  getDaycareByID,
  updateDaycare,
  deleteDaycare,
} = require("../../controllers/servicesControllers/daycareController");

const postDaycareHandler = async (req, res) => {
  /* data = { user, name, mail, password, phone, province, locality, streets } */
  const data = req.body;
  try {
    //validacion pendiente (todos los datos son requeridos)
    const newDaycare = await createDaycare(data);
    res.status(200).json(newDaycare);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getDaycaresHandler = async (req, res) => {
  const query = req.query;
  try {
    if (Object.keys(query).length) {
      const daycare = await filterDaycare(query);
      res.status(200).json(daycare);
    } else {
      const allDaycares = await getAllDaycares();
      res.status(200).json(allDaycares);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getDaycareDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const daycareDetail = await getDaycareByID(id);
    res.status(200).json(daycareDetail);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const putDaycareHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const editedDaycare = await updateDaycare(id);
    res.status(200).json(editedDaycare);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteDaycareHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDaycare = await deleteDaycare(id);
    res.status(200).json(deletedDaycare);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postDaycareHandler,
  getDaycaresHandler,
  getDaycareDetail,
  putDaycareHandler,
  deleteDaycareHandler,
};
