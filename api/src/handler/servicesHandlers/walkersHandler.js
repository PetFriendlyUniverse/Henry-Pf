const {
  getAllWalkers,
  getWalkersById,
  updateWalkers,
  deleteWalkersById,
  filterWalkers
} = require("../../controllers/servicesControllers/walkersController");

const getWalkersHandler = async (req, res) => {
  const query = req.query
  try {
    if (Object.keys(query).length) {
      const walkers = await filterWalkers(query)
      res.status(200).json(walkers);
    } else {
      const walkers = await getAllWalkers();
      res.status(200).json(walkers);
    }
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
  const { walker } = req.body;
  try {
    const putWalkers = await updateWalkers(walker, id);
    res.status(200).json(putWalkers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteWalkersHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteWalkers = await deleteWalkersById(id);
    res.status(200).json(deleteWalkers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getWalkersHandler,
  getWalkersDetailHandler,
  putWalkersHandler,
  deleteWalkersHandler,
};
