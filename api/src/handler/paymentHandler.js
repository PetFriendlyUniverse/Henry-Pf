const { DB_HOST, DB_PORT } = process.env;
// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "PROD_ACCESS_TOKEN",
});

const postPaymentHandler = (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: `http://${DB_HOST}:${DB_PORT}/payment/feedback`,
      failure: `http://${DB_HOST}:${DB_PORT}/payment/feedback`,
      pending: `http://${DB_HOST}:${DB_PORT}/payment/feedback`,
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = { postPaymentHandler };
