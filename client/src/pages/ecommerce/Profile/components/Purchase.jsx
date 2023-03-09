import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInvoicesById } from "../../../../redux/features/users/usersActions";
import ReviewModal from "./components/ReviewModal/ReviewModal";
function Purchase() {
  const userId = localStorage.getItem("id");

  const dispatch = useDispatch();
  const userInvoice = useSelector((state) => state.User?.userInvoicesId);
  console.log(userInvoice);
  useEffect(() => {
    dispatch(getInvoicesById(userId));
    window.scrollTo(0, 0);
  }, []);

  // ----------------------- Modal -----------------------//
  const [showModal, setShowModal] = useState(false);
  const [reviewProductId, setReviewProductId] = useState("");
  const [reviewInvoiceId, setReviewInvoiceId] = useState("");
  const handleSendReview = (productId, invoiceId) => {
    setReviewProductId(productId);
    setReviewInvoiceId(invoiceId);
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <ReviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        productId={reviewProductId}
        invoiceId={reviewInvoiceId}
      />

      {/* ------------------------- -- {fin de modal} - - -------------------------- */}

      <div
        className={` mx-4 h-[466px] w-full ${
          userInvoice.length > 4 && "overflow-scroll"
        }overflow-x-hidden rounded-2xl border-2 py-6  px-4  pt-2 sm:px-0 lg:w-1/2 xl:flex-row `}
      >
        {userInvoice.length == 0 && (
          <h2 className="pt-52 text-center font-bold uppercase tracking-widest">
            Aún has realizado ninguna compra
          </h2>
        )}
        <ol className="relative mx-5 flex w-full  flex-col-reverse border-l border-gray-200 dark:border-gray-700">
          {userInvoice?.map((invoice) => {
            let totalPriceInvoice = 0;

            return (
              <li key={invoice.invoiceId + "invId"} className=" pt-5 pl-5">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-black "></div>
                <hr className="h-px " />
                <time className="mb-1 text-sm  font-semibold leading-none ">
                  {invoice.invoiceDate
                    ?.slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}
                </time>
                {invoice.products?.map((prod, i) => {
                  totalPriceInvoice += prod.totalValue;
                  return (
                    <div
                      key={i + "prodIdInInvoices"}
                      className="relative flex flex-col justify-between"
                    >
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
                          className="absolute bottom-4  right-7 w-fit self-end rounded-md  bg-cornflowerblue p-1 text-xs font-semibold text-slate-100 transition-all duration-100 hover:bg-blue-500"
                          onClick={() =>
                            handleSendReview(prod.productId, invoice.invoiceId)
                          }
                        >
                          Enviar feedback
                        </button>
                      )}
                      <hr />
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
