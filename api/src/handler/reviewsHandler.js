const {
  getReviewByProduct,
  getReviewByUser,
  createNewReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewsController");
const { createReviewValidateAndFormater } = require("../helpers/reviewHelpers");

const getReviewByPoductHandler = async (req, res) => {
  const { productId } = req.params;
  try {
    const reviews = await getReviewByProduct(productId);
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const getReviewByUserHandler = async (req, res) => {
  const { userId } = req.params;
  try {
    const reviews = await getReviewByUser(userId);
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const postCreateReviewHandler = async (req, res) => {
  const data = req.body;
  const { userId, invoiceId } = req.params;
  try {
    const dataFormated = createReviewValidateAndFormater(
      userId,
      invoiceId,
      data
    );
    const newReview = await createNewReview(dataFormated, invoiceId);
    return res.status(200).json(newReview);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const putUpdateReviewHandler = async (req, res) => {
  const { reviewId } = req.params;
  const { userId, content } = req.body;
  if (!content)
    return res
      .status(400)
      .send("No se puede actualizar comentarios sin un contenido");

  try {
    const updatedReview = await updateReview(reviewId, userId, content);
    return res.status(200).json(updatedReview);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const deleteReviewHandler = async (req, res) => {
  const { reviewId } = req.params;

  try {
    const messageOfDelete = await deleteReview(reviewId);
    res.status(200).send(messageOfDelete);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getReviewByPoductHandler,
  getReviewByUserHandler,
  postCreateReviewHandler,
  putUpdateReviewHandler,
  deleteReviewHandler,
};
