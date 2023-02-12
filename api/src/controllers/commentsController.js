const { Comments } = require("../db");

const getCommentsByProduct = async (productId) => {
  const comments = await Comments.findAll({
    where: {
      ProductId: productId,
    },
  });
  if (comments) return comments;
  throw Error("Todavía no hay comentarios");
};

const getCommentsByUser = async (userId) => {
  const comments = await Comments.findAll({
    where: {
      UserId: userId,
    },
  });
  if (comments) return comments;
  throw Error("Este usuario no ha realizado comentarios todavía");
};

const createNewComment = async (userId, content) => {
  const newComment = await Comments.create({ userId, content });
  if (newComment) return newComment;
  throw Error("Lo sentimos hubo un error al intentar crear el comentario");
};

module.exports = { getCommentsByProduct, getCommentsByUser, createNewComment };
