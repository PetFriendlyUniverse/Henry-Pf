const { Router } = require("express");
const passport = require("passport");
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const invoicesRoutes = require("./invoicesRoutes");
const storeRoutes = require("./storeRoutes");
const commentsRouter = require("./commentsRouter");
const favoriteRouter = require("./favoriteRouter");
const loginRouter = require("./loginRouter");
const brandsRouter = require("./brandsRouter");
require("../helpers/google.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const { generator } = require("../randomGenerator");
generator();
router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/invoices", invoicesRoutes);
router.use("/store", storeRoutes);
router.use("/comments", commentsRouter);
router.use("/favorite", favoriteRouter);
router.use("/brands", brandsRouter);

router.use(
  "/auth",
  passport.authenticate("auth-google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    session: false,
  }),
  loginRouter
);

module.exports = router;
