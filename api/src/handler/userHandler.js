const {
  createUser,
  getAllUsers,
  updateAllUsers,
  deleteUsersById,
} = require("../controllers/userControllers");

const postUserHandler = async (req, res) => {
  const { name, mail, user, password } = req.body;

  try {
    const newUser = await createUser(name, mail, user, password);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getUserHandler = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const putUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await updateAllUsers(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await deleteUsersById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
  getUserHandler,
  putUserHandler,
  deleteUserHandler,
};
