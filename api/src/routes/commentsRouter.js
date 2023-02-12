const { Router } = require("express");
const {
  getCommentsByPoductHandler,
  getCommentsByUserHandler,
  postCreateCommentHandler,
  putUpdateCommentHandler,
  deleteCommentHandler,
} = require("../handler/commentsHandler");

const commentsRouter = Router();

commentsRouter.get("/byProduct/:productId", getCommentsByPoductHandler);
commentsRouter.get("/byUser/:userId", getCommentsByUserHandler);

commentsRouter.post("/create", postCreateCommentHandler); // recibe [userId & content] (body)

commentsRouter.put("/update/:commentId", putUpdateCommentHandler);

commentsRouter.delete("/:commentId", deleteCommentHandler);

module.exports = commentsRouter;
