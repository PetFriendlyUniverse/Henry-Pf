const { MP_TOKEN } = process.env;
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: MP_TOKEN,
});

const postPaymentHandler = (req, res) => {
  const products = req.body;
  // preference
  let preference = {
    items: products,
    back_urls: {
      // corregir redireccionamiento
      success: `https://petfriendlyuniverse.vercel.app/shop/success`,

      failure: `https://petfriendlyuniverse.vercel.app/failure`,
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
