const {
  createAdoption,
} = require("../../controllers/adoptionControllers/adoptionControllers");

const cloudinary = require("cloudinary").v2;

const postAdoptionHandler = async (req, res) => {
  const { UserId: userId } = req.params;
  const data = req.body;
  const file = req.file;
  try {
    if (file) {
      const image = await cloudinary.uploader.upload(file.path);
      data.img = image.secure_url;
    }
    const newAdoption = await createAdoption(userId, data);
    res.status(200).json(newAdoption);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postAdoptionHandler,
};
