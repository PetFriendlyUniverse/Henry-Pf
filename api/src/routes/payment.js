const { Router } = require("express");
const {
  postPaymentHandler,
  postWebhookHandler,
} = require("../handler/paymentHandler");

const paymentRoutes = Router();

paymentRoutes.post("/new", postPaymentHandler);

paymentRoutes.post("/webhook", postWebhookHandler);

module.exports = paymentRoutes;
