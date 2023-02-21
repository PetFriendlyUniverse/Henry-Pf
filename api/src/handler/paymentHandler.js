const PaymentController = require("../controllers/paymentController");
const PaymentService = require("../services/paymentService");
const PaymentInstance = new PaymentController(new PaymentService());

const postPaymentHandler = (req, res) =>
  PaymentInstance.getMercadoPagoLink(req, res);

const postWebhookHandler = (req, res) => PaymentInstance.webhook(req, res);

module.exports = { postPaymentHandler, postWebhookHandler };
