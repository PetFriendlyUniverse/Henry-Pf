const express = require("express");
const passport = require("passport");
const morgan = require("morgan");
const routes = require("./routes/index.js");

const cloudinary = require("cloudinary").v2;
const { ORIGIN, REMOTE_ORIGIN } = process.env;

require("./db.js");

const server = express();

server.name = "API";

server.use(morgan("dev"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

server.use(express.json());
server.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    // "https://petfriendlyuniverse.vercel.app" // ORIGIN en deploy
    `${ORIGIN}`
  ); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(passport.initialize());

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
