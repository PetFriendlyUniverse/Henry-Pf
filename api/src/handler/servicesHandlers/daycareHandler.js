const {
  getAllDaycares,
  filterDaycare,
  getDaycareByID,
  createDaycare,
  updateDaycare,
  deleteDaycare,
} = require("../../controllers/servicesControllers/daycareController");
const cloudinary = require("cloudinary").v2;

const postDaycareHandler = async (req, res) => {
  const { UserId: userId } = req.params;

  try {
    const newDaycare = await createDaycare(userId);
    res.status(200).json(newDaycare);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
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
const putDaycareHandler = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const file = req.file;
  try {
    const image = await cloudinary.uploader.upload(file.path);
    data.img = image.secure_url;
    const daycareEdited = await updateDaycare(data, id, file);
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
