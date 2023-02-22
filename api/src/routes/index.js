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
const paymentRouter = require("./payment");
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
router.use("/payment", paymentRouter);

router.get(
  "/auth",
  passport.authenticate("auth-google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    session: false,
  })
);

router.get(
  "/auth/google",
  passport.authenticate("auth-google", { session: false }),
  (req, res) => {
    const { token } = req.user;
    const { id } = req.user.user;
    res.send({ token: token, id: id });
  }
);

// router.get(
//   // OAuth 2 callback url. Use this url to configure your OAuth client in the
//   // Google Developers console
//   "/auth/google/callback",

//   // Finish OAuth 2 flow using Passport.js
//   passport.authenticate("auth-google", {
//     scope: [
//       "https://www.googleapis.com/auth/userinfo.profile",
//       "https://www.googleapis.com/auth/userinfo.email",
//     ],
//     session: false,
//   }),

//   // Redirect back to the original page, if any
//   (req, res) => {
//     const { token } = req.user;
//     const { id } = req.user.user;
//     console.log(id, token);
//     const redirect = req.session.oauth2return || "/";
//     delete req.session.oauth2return;
//     // res.redirect(redirect);
//     res.status(200).json({ id: id, token: token });
//   }
// );

module.exports = router;
