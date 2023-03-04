const {
  createWalkers,
  getAllWalkers,
  getWalkersById,
  updateWalkers,
  deletedWalkersById,
  filterWalkers,
  approvedWalkersById,
} = require("../../controllers/servicesControllers/walkersController");
const cloudinary = require("cloudinary").v2;

const postWalkersHandler = async (req, res) => {
  const { UserId: userId } = req.params;
  try {
    const newWalkers = await createWalkers(userId);
    res.status(200).json(newWalkers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getWalkersHandler = async (req, res) => {
  const query = req.query;
  try {
    let walkers;
    if (Object.keys(query).length) {
      const { page, pq, ...filterParams } = query;
      walkers = await filterWalkers(filterParams, page, pq);
    } else {
      const { page, pq } = query;
      walkers = await getAllWalkers(page, pq);
    }
    res.status(200).json(walkers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getWalkersDetailHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const walkersDetail = await getWalkersById(id);
    res.status(200).json(walkersDetail);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const putWalkersHandler = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const file = req.file;
  try {
    const image = await cloudinary.uploader.upload(file.path);
    data.img = image.secure_url;
    const putWalkers = await updateWalkers(data, id, file);
    res.status(200).json(putWalkers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deletedWalkersHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteWalkers = await deletedWalkersById(id);
    res.status(200).json(deleteWalkers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const approvedWalkerHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteWalkers = await approvedWalkersById(id);
    res.status(200).json(deleteWalkers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getWalkersHandler,
  getWalkersDetailHandler,
  putWalkersHandler,
  deletedWalkersHandler,
  postWalkersHandler,
  approvedWalkerHandler,
};
