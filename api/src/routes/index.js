const { Router } = require("express");
const passport = require("passport");
const userRoutes = require("./userRoutes");
const productsRoutes = require("./productsRoutes");
const invoicesRoutes = require("./invoicesRoutes");
const storeRoutes = require("./storeRoutes");
const reviewRouter = require("./reviewRouter");
const favoriteRouter = require("./favoriteRouter");
const brandsRouter = require("./brandsRouter");
const paymentRouter = require("./payment");
const mailRoutes = require("./mailRoutes");
const dashboardRouter = require("./dashboardRouter");
const petsRouter = require("./petsRouter");
const daycareRouter = require("./servicesRouters/daycareRouter");
const walkersRouter = require("./servicesRouters/walkersRouter");
const provincias = require("./provinciasRouter");
const localidades = require("./localidadesRoutes");
const tokenRouter = require("./tokenRoutes");
require("../helpers/google.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const { generator } = require("../randomGenerator");

// generator();
router.use("/randomgenerator", (req, res) => {
  generator();
  res.send("Ejecucion de randomGenerator exitosa");
});


router.use("/localidades", localidades);
router.use("/provincias", provincias);
router.use("/user", userRoutes);
router.use("/products", productsRoutes);
router.use("/invoices", invoicesRoutes);
router.use("/store", storeRoutes);
router.use("/review", reviewRouter);
router.use("/favorite", favoriteRouter);
router.use("/brands", brandsRouter);
router.use("/payment", paymentRouter);
router.use("/mails", mailRoutes);
router.use("/daycare", daycareRouter);
router.use("/walker", walkersRouter);
router.use("/pets", petsRouter);
router.use("/dashboard", dashboardRouter);
router.use("/token", tokenRouter);

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

    res.redirect(`https://petfriendlyuniverse.vercel.app/shop?t=${token}&i=${id}`);


  }
);

module.exports = router;
