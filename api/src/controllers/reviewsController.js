const { Review, Invoices_Products } = require("../db");

const getReviewByProduct = async (productId) => {
  const reviews = await Review.findAll({
    where: {
      ProductId: productId,
    },
  });
  if (reviews) return reviews;
  throw Error("No reviews yet");
};

const getReviewByUser = async (userId) => {
  const reviews = await Review.findAll({
    where: {
      UserId: userId,
    },
  });
  if (reviews) return reviews;
  throw Error("This user has not reviewed yet");
};

const createNewReview = async (formatedData, invoiceId) => {
  const newReview = await Review.create(formatedData);
  // reviewSent a true
  await Invoices_Products.update(
    { reviewSent: true },
    {
      where: {
        InvoiceId: invoiceId,
        ProductId: formatedData.ProductId,
      },
    }
  );
  if (newReview) return newReview;
  throw Error("Lo sentimos, ha ocurrido un error y no se pudo crear la reseña");
};

const updateReview = async (reviewId, userId, content) => {
  const reviewToUpdate = await Review.findByPk(reviewId);
  if (!reviewToUpdate) throw Error("review not found");
  if (reviewToUpdate.UserId !== userId)
    throw Error("A user cannot edit someone else's review"); //verificamos que sea el mismo user

  await reviewToUpdate.update({ content });
  await reviewToUpdate.save();
  if (reviewToUpdate) return reviewToUpdate;
  throw Error("Sorry, there was an error trying to update the review");
};

const deleteReview = async (reviewId) => {
  const reviewToDelete = await Review.findByPk(reviewId);
  if (!reviewToDelete) throw Error("review not found");

  await reviewToDelete.destroy();
  return "review has been removed";
};

module.exports = {
  getReviewByProduct,
  getReviewByUser,
  createNewReview,
  updateReview,
  deleteReview,
};
