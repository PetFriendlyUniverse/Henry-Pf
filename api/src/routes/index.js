const { Router } = require("express");
const passport = require("passport");
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const invoicesRoutes = require("./invoicesRoutes");
const storeRoutes = require("./storeRoutes");
const commentsRouter = require("./commentsRouter");
const favoriteRouter = require("./favoriteRouter");
const brandsRouter = require("./brandsRouter");
const paymentRouter = require("./payment");
const mailRoutes = require("./mailRoutes");
const datesRouter = require("./datesRouter");
const petsRouter = require("./petsRouter");
const daycareRouter = require("./servicesRouters/daycareRouter");
const walkersRouter = require("./servicesRouters/walkersRouter");
require("../helpers/google.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const { generator } = require("../randomGenerator");
generator();
// router.use("/randomgenerator", (req, res) => {
//   res.send("Ejecucion de randomGenerator exitosa");
// });

router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/invoices", invoicesRoutes);
router.use("/store", storeRoutes);
router.use("/comments", commentsRouter);
router.use("/favorite", favoriteRouter);
router.use("/brands", brandsRouter);
router.use("/payment", paymentRouter);
router.use("/mails", mailRoutes);
router.use("/daycare", daycareRouter);
router.use("/walker", walkersRouter);
router.use("/dates", datesRouter);
router.use("/pets", petsRouter);

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

    res.redirect(`http://localhost:5173/shop?t=${token}&i=${id}`);

    // res.send({ token: token, id: id });
  }
);

module.exports = router;
