const { User } = require("../db");

const createUser = async (name, mail, user, password) => {
  const data = { name, mail, user, password };

  if (!Object.values(data).every((value) => value)) throw Error("Faltan datos");

  return await User.create(data);
};
const getAllUsers = async () => {
  const userList = await User.findAll({});
  return userList;
};

const updateAllUsers = async (user, id) => {
  await User.update(user, {
    where: { id: id },
  });
  const updated = await User.findByPk(id);
  return updated;
};

const deleteUsersById = async (id) => {
  if (!id) throw Error("id erroneo");
  const update = await User.update({ enable: false }, { where: { id: id } });
  return update ? "Usuario eliminado correctamente" : "Usuario incorrecto";
};

module.exports = { createUser, getAllUsers, updateAllUsers, deleteUsersById };
