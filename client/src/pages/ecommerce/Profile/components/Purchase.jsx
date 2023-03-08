import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInvoicesById } from "../../../../redux/features/users/usersActions";
import ReviewModal from "./components/ReviewModal/ReviewModal";
function Purchase() {
  const userId = localStorage.getItem("id");

  const dispatch = useDispatch();
  const userInvoice = useSelector((state) => state.User?.userInvoicesId);

  useEffect(() => {
    dispatch(getInvoicesById(userId));
    window.scrollTo(0, 0);
  }, []);

  // ----------------------- Modal -----------------------//
  const [showModal, setShowModal] = useState(false);
  const handleSendReview = (invoiceId, productId) => {
    setShowModal((prev) => !prev);
    setReviewInvoiceId(invoiceId);
    setReviewProductId(productId);
  };
  const [reviewProductId, setReviewProductId] = useState("");
  return (
    <>
      <ReviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        productId={reviewProductId}
      />

      {/* ------------------------- -- {fin de modal} - - -------------------------- */}

      <div className=" mx-4 h-[466px] w-full overflow-scroll overflow-x-hidden rounded-2xl border-2 py-6  px-4  pt-2 sm:px-0 lg:w-1/2 xl:flex-row ">
        <ol className="relative mx-5 flex w-full  flex-col-reverse border-l border-gray-200 dark:border-gray-700">
          {userInvoice?.map((invoice) => {
            let totalPriceInvoice = 0;

            return (
              <li key={invoice.invoiceId} className=" pt-5 pl-5">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-black "></div>
                <hr className="h-px " />
                <time className="mb-1 text-sm  font-semibold leading-none ">
                  {invoice.invoiceDate
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}
                </time>
                {invoice.products?.map((prod, i) => {
                  totalPriceInvoice += prod.totalValue;
                  return (
                    <div key={i} className="flex flex-col justify-between">
                      <hr className="mt-1 h-px" />

                      <h4 className="my-1 bg-russianviolet py-1 px-1  text-sm font-bold tracking-wider text-white">
                        {prod.productName}
                      </h4>

                      <span className="my-1 text-xs font-medium uppercase underline underline-offset-4">
                        Cantidad:
                        <span className="rounded-md bg-ultraviolet py-[2px] px-2 text-white">
                          {prod.amount}
                        </span>
                      </span>

                      <span className=" my-1 rounded-md text-xs  font-semibold uppercase underline underline-offset-4">
                        Precio por unidad:{" "}
                        <span className="rounded-md bg-ultraviolet py-[2px] px-2 text-white">
                          ${prod.unitPrice}
                        </span>
                      </span>

                      <span className="mb-2 py-1 text-xs  font-semibold uppercase underline underline-offset-4">
                        Precio total:{" "}
                        <span className="rounded-md bg-ultraviolet py-[2px] px-2 text-white">
                          ${prod.totalValue}
                        </span>
                      </span>
                      {!prod.reviewSent && (
                        <button
                          className="border"
                          onClick={() =>
                            handleSendReview(invoice.invoiceId, prod.productId)
                          }
                        >
                          Dá tu opinión
                        </button>
                      )}
                    </div>
                  );
                })}
                <span className="text-xs font-bold">
                  Precio Final:{" "}
                  <span className="rounded-lg bg-ultraviolet py-1 px-2 text-xs text-yellow-500">
                    {" "}
                    ${totalPriceInvoice}
                  </span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default Purchase;
