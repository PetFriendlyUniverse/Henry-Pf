const { User, Store, Walker, Daycare } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendResetPasswordEmail, confirmMail } = require("./mailController");

const createUser = async (user, name, lastname, mail, password) => {
  const data = {
    user,
    name,
    lastname,
    mail,
    password,
  };
  if (!Object.values(data).every((value) => value)) throw Error("Missing data");
  const hashedPassword = await bcrypt.hash(password, 10); // esto en codificado la password no sacar
  const userCreated = await User.create({
    ...data,
    password: hashedPassword,
  });
  await confirmMail(name, lastname, mail);
  return userCreated;
};

const loginUser = async (mail, password) => {
  const user = await User.findOne({ where: { mail } });
  if (!user) throw Error("User not found");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw Error("Invalid credentials");
  if (mail === "petfriendyleuniverse@gmail.com") {
    await User.update(
      { admin: true },
      { where: { mail: "petfriendyleuniverse@gmail.com" } }
    );
  }
  const token = jwt.sign(
    { id: user.id, token: user.token },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { id: user.id, token };
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
  const user = await User.findOne({ where: { id: id } });
  return [user];
};

const resetPassword = async (mail) => {
  const user = await User.findOne({ where: { mail } });
  if (!user) {
    throw Error("No existe el usuario con ese correo electrónico");
  }
  const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  await sendResetPasswordEmail(mail, resetToken);
  return resetToken;
};

const verifyResetToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch (error) {
    throw new Error("Token de reseteo inválido");
  }
};

const updatePassword = async (userId, password) => {
  const user = await User.findOne({ where: { id: userId } });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  await user.save();
};

const storeById = async (id) => {
  const store = await Store.findOne({
    where: {
      UserId: id,
    },
  });
  return store;
};
const walkerById = async (id) => {
  const walker = await Walker.findOne({
    where: {
      UserId: id,
    },
  });
  return walker;
};
const daycareById = async (id) => {
  const daycare = await Daycare.findOne({
    where: {
      UserId: id,
    },
  });
  return daycare;
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateAllUsers,
  deleteUsersById,
  resetPassword,
  verifyResetToken,
  updatePassword,
  storeById,
  walkerById,
  daycareById,
};
