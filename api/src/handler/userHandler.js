require("dotenv").config();
const {
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
} = require("../controllers/userControllers");
const cloudinary = require("cloudinary").v2;

const postUserHandler = async (req, res) => {
  const {
    user,
    name,
    lastname,
    mail,
    password,
    area_code,
    number,
    province,
    locality,
    zip_code,
    street_name,
    street_number,
    img,
    area_code_emergency,
    emergency_number,
  } = req.body;

  try {
    const newUser = await createUser(
      user,
      name,
      lastname,
      mail,
      password,
      area_code,
      number,
      province,
      locality,
      zip_code,
      street_name,
      street_number,
      img,
      area_code_emergency,
      emergency_number
    );
    res.status(200).json(newUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const loginHandler = async (req, res) => {
  const { mail, password } = req.body;
  try {
    const data = await loginUser(mail, password);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const logoutHandler = async (req, res) => {
  res.clearCookie("token");
  res.sendStatus(200);
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
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const putUserHandler = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const file = req.file;
  try {
    //const forInsomnia = JSON.parse(req.body.user); //Esto es unicamente para el insomnia
    const image = await cloudinary.uploader.upload(file.path);
    user.img = image.secure_url;
    const users = await updateAllUsers(user, id, file);
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

const resetConfirmPasswordHandler = async (req, res) => {
  const { mail } = req.body;
  try {
    const password = await resetPassword(mail);
    res.status(200).json(password);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const resetPasswordHandler = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const userId = await verifyResetToken(token);
    await updatePassword(userId, password);
    res.status(200).json("Contraseña actualizada correctamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserStore = async (req, res) => {
  const { id } = req.params;
  try {
    const storeByUser = await storeById(id);
    res.status(200).json(storeByUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
  loginHandler,
  logoutHandler,
  getUserHandler,
  getUserDetailHandler,
  putUserHandler,
  deleteUserHandler,
  resetConfirmPasswordHandler,
  resetPasswordHandler,
  getUserStore,
};
