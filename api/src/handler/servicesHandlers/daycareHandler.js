const {
  getAllDaycares,
  filterDaycare,
  getDaycareByID,
  createDaycare,
  updateDaycare,
  deletedDaycare,
  approvedDaycare,
} = require("../../controllers/servicesControllers/daycareController");
const cloudinary = require("cloudinary").v2;

const postDaycareHandler = async (req, res) => {
  const { id: userId } = req.user;
  const data = req.body;
  const file = req.file;
  try {
    const image = await cloudinary.uploader.upload(file.path);
    data.img = image.secure_url;
    const newDaycare = await createDaycare(userId, data);
    res.status(200).json(newDaycare);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getDaycaresHandler = async (req, res) => {
  const query = req.query;
  try {
    let daycares;
    if ("province" in query) {
      const { page, pq, ...filterParams } = query;
      daycares = await filterDaycare(filterParams, page, pq);
    } else {
      const { page, pq } = query;
      daycares = await getAllDaycares(page, pq);
    }
    res.status(200).json(daycares);
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
    if (file) {
      const image = await cloudinary.uploader.upload(file.path);
      data.img = image.secure_url;
    }
    const daycareEdited = await updateDaycare(data, id, file);
    res.status(200).json(daycareEdited);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deletedDaycareHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const daycareDeleted = await deletedDaycare(id);
    res.status(200).json(daycareDeleted);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const approvedDaycareHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const daycareDeleted = await approvedDaycare(id);
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
  deletedDaycareHandler,
  approvedDaycareHandler,
};
