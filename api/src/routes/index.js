const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.user("user", userRoutes);
router.user("products", productsRoutes);
router.user("invoices", invoicesRoutes);
router.user("stores", storesRoutes);

module.exports = router;
