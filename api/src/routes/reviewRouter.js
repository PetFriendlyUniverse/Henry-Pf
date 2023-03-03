const { Router } = require("express");
const {
  getReviewByPoductHandler,
  getReviewByUserHandler,
  postCreateReviewHandler,
  putUpdateReviewHandler,
  deleteReviewHandler,
} = require("../handler/reviewsHandler");

const reviewRouter = Router();

reviewRouter.get("/byProduct/:productId", getReviewByPoductHandler);
reviewRouter.get("/byUser/:userId", getReviewByUserHandler);

reviewRouter.post("/create", postCreateReviewHandler); // recibe [userId & content] (body)

reviewRouter.put("/update/:reviewId", putUpdateReviewHandler);

reviewRouter.delete("/:reviewId", deleteReviewHandler);

module.exports = reviewRouter;
