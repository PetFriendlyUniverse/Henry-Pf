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

const createNewComment = async (userId, content, productId) => {
  const newComment = await Comments.create({
    UserId: userId,
    content,
    ProductId: productId,
  });

  if (newComment) return newComment;
  throw Error("Lo sentimos hubo un error al intentar crear el comentario");
};

const updateComment = async (commentId, userId, content) => {
  const commentToUpdate = await Comments.findByPk(commentId);
  if (!commentToUpdate) throw Error("El comentario no se encontró");
  if (commentToUpdate.UserId !== userId)
    throw Error("Un usuario no puede editar un comentario ajeno"); //verificamos que sea el mismo user

  await commentToUpdate.update({ content });
  await commentToUpdate.save();
  if (commentToUpdate) return commentToUpdate;
  throw Error("Lo sentimos hubo un error al intentar actualizar el comentario");
};

const deleteComment = async (commentId) => {
  const commentToDelete = await Comments.findByPk(commentId);
  if (!commentToDelete) throw Error("No se encontró el comentario");

  await commentToDelete.destroy();
  return "Se ha eliminado el comentario";
};

module.exports = {
  getCommentsByProduct,
  getCommentsByUser,
  createNewComment,
  updateComment,
  deleteComment,
};
