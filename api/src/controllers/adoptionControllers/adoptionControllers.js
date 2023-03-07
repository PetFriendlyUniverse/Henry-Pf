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
      img: data.img,
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

const getAllAdoptions = async (page, pq) => {
  const offset = (page - 1) * pq;

  const adoptionList = await Adoption.findAll({
    where: { enable: true },
    limit: pq,
    offset: offset,
  });
  const count = await Adoption.count();
  const quantity = Math.ceil(count / pq);

  return { adoptionList, quantity };
};

const filterAdoption = async (query, page, pq) => {
  let whereClause = { enable: true };
  if (query.province) {
    whereClause.province = query.province;
    if (query.locality) {
      whereClause.locality = query.locality;
    }
  }
  const offset = (page - 1) * pq;
  const adoptionList = await Adoption.findAll({
    where: whereClause,
    limit: pq,
    offset: offset,
  });
  const count = await Adoption.count({ where: whereClause });
  const quantity = Math.ceil(count / pq);
  return { adoptionList, quantity };
};

module.exports = { createAdoption, filterAdoption, getAllAdoptions };
