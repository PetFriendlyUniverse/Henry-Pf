const {} = require("../../controllers/adoptionControllers/adoptionControllers");

const cloudinary = require("cloudinary").v2;

const postAdoptionHandler = async (req, res) => {
  const { UserId: userId } = req.params;
  const data = req.body;
  const file = req.file;
  try {
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postAdoptionHandler,
};
