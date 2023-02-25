const { DB_HOST, DB_PORT, MP_TOKEN, MP_PUBLICKEY } = process.env;
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: MP_TOKEN,
});

const postPaymentHandler = (req, res) => {
  const products = req.body;

  let preference = {
    items: products,
    back_urls: {
      // corregir redireccionamiento
      success: `http://${DB_HOST}:${DB_PORT}/shop`,
      failure: `http://${DB_HOST}:${DB_PORT}/shop/checkout`,
      pending: ``,
    },
    auto_return: "approved",
    binary_mode: true,
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
      res.status(200).json({
        response,
      });
    })
    .catch((error) => {
      res.status(400).send({ error: error.message });
    });
};

module.exports = { postPaymentHandler };
