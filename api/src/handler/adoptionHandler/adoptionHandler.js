const {
  createAdoption,
  filterAdoption,
  getAllAdoptions,
} = require("../../controllers/adoptionControllers/adoptionControllers");

const cloudinary = require("cloudinary").v2;

const postAdoptionHandler = async (req, res) => {
  const { UserId: userId } = req.params;
  const data = req.body;
  const file = req.file;
  try {
    const image = await cloudinary.uploader.upload(file.path);
    data.img = image.secure_url;
    const newAdoption = await createAdoption(userId, data);
    res.status(200).json(newAdoption);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getAdoptionHandler = async (req, res) => {
  const query = req.query;
  try {
    let daycares;
    if ("province" in query) {
      const { page, pq, ...filterParams } = query;
      daycares = await filterAdoption(filterParams, page, pq);
    } else {
      const { page, pq } = query;
      daycares = await getAllAdoptions(page, pq);
    }
    res.status(200).json(daycares);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  postAdoptionHandler,
  getAdoptionHandler,
};
