const { Router } = require("express");
const { getLocalidadesHandler } = require("../handler/localidadesHandler");

const localidadesRoutes = Router();

localidadesRoutes.get("/", getLocalidadesHandler);

module.exports = localidadesRoutes;
