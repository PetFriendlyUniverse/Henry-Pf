const { Router } = require("express");
const {
  postAdoptionHandler,
  getAdoptionHandler,
  postHandlerInstagram,
  getHandlerInstagram,
  deleteInstagramHandler,
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
adoptionRouter.post("/instagram/create", postHandlerInstagram);
adoptionRouter.get("/instagram", getHandlerInstagram);
adoptionRouter.get("/instagram", getHandlerInstagram);
adoptionRouter.delete("/instagram/:id", deleteInstagramHandler);

module.exports = adoptionRouter;
