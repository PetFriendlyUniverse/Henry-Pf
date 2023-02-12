const {
  getCommentsByProduct,
  getCommentsByUser,
  createNewComment,
} = require("../controllers/commentsController");

const getCommentsByPoductHandler = async (req, res) => {
  const { productId } = req.params;
  try {
    const comments = await getCommentsByProduct(productId);
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const getCommentsByUserHandler = async (req, res) => {
  const { userId } = req.params;
  try {
    const comments = await getCommentsByUser(userId);
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const postCreateCommentHandler = async (req, res) => {
  const { userId, content } = req.body;

  if (!content)
    return res
      .status(400)
      .send("No se puede crear comentarios sin un contenido");

  try {
    const newComment = await createNewComment(userId, content);
    return res.status(200).json(newComment);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getCommentsByPoductHandler,
  getCommentsByUserHandler,
  postCreateCommentHandler,
};
