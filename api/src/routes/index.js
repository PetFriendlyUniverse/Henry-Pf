const { Router } = require("express");
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const invoicesRoutes = require("./invoicesRoutes");
const storeRoutes = require("./storeRoutes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/invoices", invoicesRoutes);
router.use("/store", storeRoutes);

module.exports = router;
