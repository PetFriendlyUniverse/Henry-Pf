const { User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (
  user,
  name,
  lastname,
  mail,
  password,
  phone,
  emergencyphone,
  province,
  locality
) => {
  const data = { user, name, lastname, mail, phone };
  const extraData = { emergencyphone, province, locality };
  if (!Object.values(data).every((value) => value)) throw Error("Missing data");
  const hashedPassword = await bcrypt.hash(password, 10); // esto en codificado la password no sacar
  const userCreated = await User.create({
    ...data,
    password: hashedPassword,
    ...extraData,
  });

  return userCreated;
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

const loginUser = async (mail, password) => {
  const user = await User.findOne({ where: { mail } });
  if (!user) throw Error("User not found");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw Error("Invalid credentials");
  const token = jwt.sign(
    { id: user.id, token: user.token },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { id: user.id, token };
};

module.exports = {
  createUser,
  getAllUsers,
  updateAllUsers,
  deleteUsersById,
  getUserById,
  loginUser,
};
