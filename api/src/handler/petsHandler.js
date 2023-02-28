const { createPet, getPetsByUser } = require("../controllers/petsController");

const postPetsHandler = async (req, res) => {
  const data = req.body;
  const { userId } = req.params;
  try {
    const pet = await createPet(data, userId);
    res.status(200).send(pet);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getPetsHandlerByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const petsByUser = await getPetsByUser(userId);
    res.status(200).send(petsByUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { postPetsHandler, getPetsHandlerByUser };
