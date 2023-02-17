const {
  createUser,
  getAllUsers,
  updateAllUsers,
  deleteUsersById,
  getUserById,
} = require("../controllers/userControllers");

const postUserHandler = async (req, res) => {
  const { user, name, lastname, mail, password, phone, province, locality } =
    req.body;

  try {
    const newUser = await createUser(
      user,
      name,
      lastname,
      mail,
      password,
      phone,
      province,
      locality
    );
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

const getUserDetailHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    res.status(404).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const putUserHandler = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  try {
    const users = await updateAllUsers(user, id);
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
  getUserDetailHandler,
};
