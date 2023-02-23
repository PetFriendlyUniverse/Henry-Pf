const {
  getAllDaycares,
  filterDaycare,
  getDaycareByID,
  createDaycare,
  updateDaycare,
  deleteDaycare,
} = require("../../controllers/servicesControllers/daycareController");

const getDaycaresHandler = async (req, res) => {
  const query = req.query;
  try {
    if (Object.keys(query).length) {
      const daycares = await filterDaycare(query);
      res.status(200).json(daycares);
    } else {
      const allDaycares = await getAllDaycares();
      res.status(200).json(allDaycares);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getDaycareByIDHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const daycareDetail = await getDaycareByID(id);
    res.status(200).json(daycareDetail);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const postDaycareHandler = async (req, res) => {
  const data = req.body;
  try {
    //validacion pendiente (todos los datos son requeridos)
    const newDaycare = await createDaycare(data);
    res.status(200).json(newDaycare);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const putDaycareHandler = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  try {
    const daycareEdited = await updateDaycare(data, id);
    res.status(200).json(daycareEdited);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteDaycareHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const daycareDeleted = await deleteDaycare(id);
    res.status(200).json(daycareDeleted);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getDaycaresHandler,
  getDaycareByIDHandler,
  postDaycareHandler,
  putDaycareHandler,
  deleteDaycareHandler,
};
