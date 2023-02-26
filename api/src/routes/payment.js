const { Router } = require("express");
const { postPaymentHandler } = require("../handler/paymentHandler");

const paymentRoutes = Router();

paymentRoutes.post("/new", postPaymentHandler);

paymentRoutes.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});
module.exports = paymentRoutes;
