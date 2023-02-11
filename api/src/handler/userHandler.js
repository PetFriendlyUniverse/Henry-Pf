const postUserHandler = async (req, res) => {
  try {
    const newUser = await createUser();
    res.status(200).send("usuario creado exitosamente");
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
const updateUserHandler = async (req, res) => {
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
    const users = await updateAllUsers(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
