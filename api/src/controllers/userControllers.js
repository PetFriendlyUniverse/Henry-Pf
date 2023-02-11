const { User } = require("../db");
const { default: axios } = require("axios");

const createUser = async (name, mail, user, password) => {
  const data = { name, mail, user, password };

  if (!Object.values(data).every((value) => value)) throw Error("Faltan datos");

  const newUser = await User.create(data);
  return newUser;
};
const getAllUsers = () => {
  const userList = User.findAll({});
};
const updateAllUsers = () => {};
const deleteUsersById = () => {};

module.exports = { createUser, getAllUsers, updateAllUsers, deleteUsersById };
