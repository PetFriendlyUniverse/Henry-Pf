const { MP_TOKEN } = process.env;
const axios = require("axios");
const { userBuyMail } = require("../controllers/mailController");

const getTokenHandler = async (req, res) => {
  const { merchantOrder, id } = req.query;
  try {
    const { data } = await axios.get(
      `https://api.mercadopago.com/merchant_orders/${merchantOrder}`,
      {
        headers: {
          Authorization: `Bearer ${MP_TOKEN}`,
        },
      }
    );
    await userBuyMail(id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getTokenHandler };
