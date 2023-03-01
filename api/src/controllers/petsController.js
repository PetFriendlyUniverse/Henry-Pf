const { User, Pet } = require("../db");

const createPet = async (data, userId) => {
  try {
    const user = await User.findByPk(userId);
    const pet = await user.createPet(data);
    return pet;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getPetsByUser = async (userId) => {
  try {
    const pets = await Pet.findAll({
      where: {
        UserId: userId,
      },
    });
    return pets;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createPet, getPetsByUser };
