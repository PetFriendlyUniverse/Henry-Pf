const { Router } = require("express");
const {
  getInvoiceHandler,
  getInvoiceIdHandler,
  postInvoiceHandler,
  getInvoiceIdUserHandler,
} = require("../handler/invoicesHandler");

const router = Router();

router.get("/", getInvoiceHandler);

router.get("/:id", getInvoiceIdHandler);

router.get("/user/:userId", getInvoiceIdUserHandler);

router.post("/create", postInvoiceHandler);

module.exports = router;
