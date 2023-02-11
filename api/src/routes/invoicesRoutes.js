const { Router } = require("express");
const {
  getInvoiceHandler,
  getInvoiceIdHandler,
  postInvoiceHandler,
} = require("../handler/invoicesHandler");

const router = Router();

router.get("/", getInvoiceHandler);

router.get("/:id", getInvoiceIdHandler);

router.post("/create", postInvoiceHandler);

module.exports = router;
