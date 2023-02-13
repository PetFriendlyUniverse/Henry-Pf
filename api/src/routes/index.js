const { Router } = require("express");
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const invoicesRoutes = require("./invoicesRoutes");
const storeRoutes = require("./storeRoutes");
const commentsRouter = require("./commentsRouter");
const favoriteRouter = require("./favoriteRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/invoices", invoicesRoutes);
router.use("/store", storeRoutes);
router.use("/comments", commentsRouter);
router.use("/favorite", favoriteRouter);

module.exports = router;
