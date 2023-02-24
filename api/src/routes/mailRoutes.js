const { Router } = require("express");
const { postConfirmMailHandler } = require("../handler/mailHandler");

const mailRoutes = Router();
//===> aca estamos en /user
mailRoutes.post("/confirm-email", postConfirmMailHandler);
/* mailRoutes.post("/forgot-password", loginHandler); */

module.exports = mailRoutes;
