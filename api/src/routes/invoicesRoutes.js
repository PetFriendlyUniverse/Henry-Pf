const { Router } = require("express");
const { getAllInvoices, getId } = require("../handler/invoicesHandler");

const router = Router();

router.get("/", getAllInvoices);

router.get("/:id", getId);

module.exports = router;
