const { MP_TOKEN } = process.env;

const getTokenHandler = async (req, res) => {
  try {
    return res.status(200).json(MP_TOKEN);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getTokenHandler };
