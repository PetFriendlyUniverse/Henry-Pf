const { MP_TOKEN } = process.env;
const axios = require("axios");
const getTokenHandler = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.mercadopago.com/merchant_orders/7942700029`,
      {
        headers: {
          Authorization: `Bearer ${MP_TOKEN}`,
        },
      }
    );

    return res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getTokenHandler };
