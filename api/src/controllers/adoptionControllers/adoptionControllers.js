const { Adoption, User } = require("../../db");

const createAdoption = async (userId, data) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error(`No se pudo encontrar el usuario con ID ${userId}`);
  }
  const newAdoption = await Adoption.create(
    {
      description: data.description,
      province: data.province,
      locality: data.locality,
      UserId: userId,
    },
    {
      include: User,
    }
  );
  const adoptionWithUser = await Adoption.findByPk(newAdoption.id, {
    include: {
      model: User,
      attributes: [
        "name",
        "lastname",
        "user",
        "area_code",
        "number",
        "img",
        "mail",
      ],
    },
  });
  return adoptionWithUser;
};

module.exports = { createAdoption };
