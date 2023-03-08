const createReviewValidateAndFormater = (userId, invoiceId, data) => {
  if (
    !userId ||
    !invoiceId ||
    !data.productId ||
    !data.comment ||
    !data.dispatchtime ||
    !data.qualification ||
    !data.support
  ) {
    throw Error("Datos incompletos para la creación de la reseña");
  }

  const formatedData = {
    ProductId: parseInt(data.productId),
    UserId: parseInt(userId),
    comment: data.comment,
    dispatchtime: data.dispatchtime,
    qualification: data.qualification,
    support: data.support,
  };
  return formatedData;
};

module.exports = { createReviewValidateAndFormater };
