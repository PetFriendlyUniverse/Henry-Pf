const { Router } = require("express");
const {
  postAdoptionHandler,
  getAdoptionHandler,
} = require("../../handler/adoptionHandler/adoptionHandler");
const adoptionRouter = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

adoptionRouter.post(
  "/create/:UserId",
  upload.single("img"),
  postAdoptionHandler
);
adoptionRouter.get("/", getAdoptionHandler);

module.exports = adoptionRouter;
