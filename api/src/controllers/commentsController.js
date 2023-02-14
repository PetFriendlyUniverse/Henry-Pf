const { Comments } = require("../db");

const getCommentsByProduct = async (productId) => {
  const comments = await Comments.findAll({
    where: {
      ProductId: productId,
    },
  });
  if (comments) return comments;
  throw Error("No comments yet");
};

const getCommentsByUser = async (userId) => {
  const comments = await Comments.findAll({
    where: {
      UserId: userId,
    },
  });
  if (comments) return comments;
  throw Error("This user has not commented yet");
};

const createNewComment = async (userId, content, productId) => {
  const newComment = await Comments.create({
    UserId: userId,
    content,
    ProductId: productId,
  });

  if (newComment) return newComment;
  throw Error("Sorry, there was an error trying to create the comment");
};

const updateComment = async (commentId, userId, content) => {
  const commentToUpdate = await Comments.findByPk(commentId);
  if (!commentToUpdate) throw Error("Comment not found");
  if (commentToUpdate.UserId !== userId)
    throw Error("A user cannot edit someone else's comment"); //verificamos que sea el mismo user

  await commentToUpdate.update({ content });
  await commentToUpdate.save();
  if (commentToUpdate) return commentToUpdate;
  throw Error("Sorry, there was an error trying to update the comment");
};

const deleteComment = async (commentId) => {
  const commentToDelete = await Comments.findByPk(commentId);
  if (!commentToDelete) throw Error("Comment not found");

  await commentToDelete.destroy();
  return "comment has been removed";
};

module.exports = {
  getCommentsByProduct,
  getCommentsByUser,
  createNewComment,
  updateComment,
  deleteComment,
};
