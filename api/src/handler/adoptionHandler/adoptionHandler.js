const {
  createAdoption,
  getAllAdoptions,
  createInstagramPost,
  getInstagramPost,
  getInstagramDelete,
  getPostDelete,
} = require("../../controllers/adoptionControllers/adoptionControllers");

const cloudinary = require("cloudinary").v2;

const postAdoptionHandler = async (req, res) => {
  const { UserId: userId } = req.params;
  const data = req.body;
  const files = req.files;
  try {
    const images = [];
    for (const file of files) {
      const image = await cloudinary.uploader.upload(file.path);
      images.push(image.secure_url);
    }
    data.img = images;
    const newAdoption = await createAdoption(userId, data);
    res.status(200).json(newAdoption);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getAdoptionHandler = async (req, res) => {
  const query = req.query;
  try {
    const { page, pq } = query;
    const adoption = await getAllAdoptions(page, pq);
    res.status(200).json(adoption);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const postHandlerInstagram = async (req, res) => {
  const data = req.body;
  try {
    const instagramPost = await createInstagramPost(data);
    res.status(200).json(instagramPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getHandlerInstagram = async (req, res) => {
  const query = req.query;
  try {
    const { page, pq } = query;
    const instagramPost = await getInstagramPost(page, pq);
    res.status(200).json(instagramPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteInstagramHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const instagramDelete = await getInstagramDelete(id);
    res.status(200).json(instagramDelete);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteAdoptionHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const postDelete = await getPostDelete(id);
    res.status(200).json(postDelete);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postAdoptionHandler,
  getAdoptionHandler,
  postHandlerInstagram,
  getHandlerInstagram,
  deleteInstagramHandler,
  deleteAdoptionHandler,
};
