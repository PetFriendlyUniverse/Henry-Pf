export const reviewValidation = (review) => {
  if (
    !review.dispatchtime ||
    !review.support ||
    !review.qualification ||
    !review.comment
  ) {
    throw Error("Hay campos incompletos");
  }
  if (review.comment.length < 10 || review.comment.length > 255)
    throw Error("El comentario debe tener entre 10 y 255 caracteres");
};
