const { User } = require("../db");

const createUser = async (name, mail, user, password) => {
  const data = { name, mail, user, password };

  if (!Object.values(data).every((value) => value)) throw Error("Missing data");

  return await User.create(data);
};
const getAllUsers = async () => {
  const userList = await User.findAll({});
  return userList;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const updateAllUsers = async (user, id) => {
  await User.update(
    { ...user },
    {
      where: { id: id },
    }
  );
  const updated = await User.findByPk(id);
  return updated;
};

const deleteUsersById = async (id) => {
  if (!id) throw Error("Wrong Id");
  const update = await User.update({ enable: false }, { where: { id: id } });
  return update ? "User deleted successfully" : "Wrong user";
};

module.exports = {
  createUser,
  getAllUsers,
  updateAllUsers,
  deleteUsersById,
  getUserById,
};
