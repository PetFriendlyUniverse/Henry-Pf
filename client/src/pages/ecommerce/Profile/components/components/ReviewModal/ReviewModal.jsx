import React, { useEffect, useState } from "react";
import RatingStar from "../../../assets/RatingStar";
import close from "../../../../../../assets/general/close.svg";
import axios from "axios";
import Swal from "sweetalert2";
import { reviewValidation } from "./helpers/reviewValidation";
import { useDispatch } from "react-redux";
import { getInvoicesById } from "../../../../../../redux/features/users/usersActions";

function ReviewModal({ showModal, setShowModal, productId, invoiceId }) {
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
    setReview({
      productId,
      dispatchtime: "",
      qualification: "",
      support: "",
      comment: "",
    });
  };
  const [review, setReview] = useState({
    productId,
    dispatchtime: "",
    qualification: "",
    support: "",
    comment: "",
  });

  useEffect(() => {
    setReview((prev) => {
      return { ...prev, productId };
    });
  }, [productId]);

  const handleClickRating = (name, value) => {
    setReview((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChangeComment = ({ target }) => {
    setReview((prev) => {
      return { ...prev, comment: target.value };
    });
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const reviewVals = Object.values(review);
    if (reviewVals.every((val) => !!val)) {
      try {
        reviewValidation(review);
        Swal.fire({
          title: "Procesando los datos",
          allowEscapeKey: true,
          allowOutsideClick: true,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        await axios.post(`/review/create/${userId}/${invoiceId}`, review);
        dispatch(getInvoicesById(userId));
        await Swal.fire({
          icon: "success",
          title: "Gracias por brindarnos tu reseña!",
          showConfirmButton: true,
          timer: 1500,
          allowEscapeKey: true,
          allowOutsideClick: true,
        });

        setShowModal((prev) => !prev);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response?.data.error || error,
          showConfirmButton: true,
          timer: 1500,
          closeOnClickOutside: true,
          closeOnEsc: true,
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Debe completar todos los campos",
        showConfirmButton: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
        timer: 1500,
      });
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 z-50 ${
        showModal ? "flex" : "hidden"
      } h-screen w-screen place-content-center  `}
    >
      <div
        onClick={handleShowModal}
        className={`fixed opacity-60 transition duration-1000 ease-in-out ${
          !showModal && "hidden"
        } relative h-screen w-screen bg-black `}
      ></div>
      <form
        onSubmit={handleSubmitReview}
        className="absolute top-[45%] flex h-[500px] w-[550px] max-w-[90%] translate-y-[-50%] flex-col items-center justify-center rounded-lg bg-russianviolet"
      >
        <h2 className="mb-8 text-3xl font-bold tracking-wide text-white"></h2>
        <span
          onClick={handleShowModal}
          className="absolute top-2 right-2 self-end"
        >
          <img
            src={close}
            alt="Cerrar Modal"
            className="w-6 cursor-pointer transition-all duration-100 ease-in hover:scale-105"
          />
        </span>

        <h2 className="text-slate-100">Tiempo de envío</h2>
        <div className="mb-4 flex">
          <label
            htmlFor="q1"
            onClick={() => handleClickRating("dispatchtime", 1)}
          >
            <RatingStar
              title="1"
              className="w-7"
              color={review?.dispatchtime >= 1 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q1"
            type="radio"
            value={1}
            name="dispatchtime"
            className="hidden"
          />
          <label
            htmlFor="q2"
            onClick={() => handleClickRating("dispatchtime", 2)}
          >
            <RatingStar
              title="2"
              className="w-7"
              color={review?.dispatchtime >= 2 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q2"
            type="radio"
            value={2}
            name="dispatchtime"
            className="hidden"
          />
          <label
            htmlFor="q3"
            onClick={() => handleClickRating("dispatchtime", 3)}
          >
            <RatingStar
              title="3"
              className="w-7"
              color={review?.dispatchtime >= 3 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q3"
            type="radio"
            value={3}
            name="dispatchtime"
            className="hidden"
          />
          <label
            htmlFor="q4"
            onClick={() => handleClickRating("dispatchtime", 4)}
          >
            <RatingStar
              title="4"
              className="w-7"
              color={review?.dispatchtime >= 4 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q4"
            type="radio"
            value={4}
            name="dispatchtime"
            className="hidden"
          />
          <label
            htmlFor="q5"
            onClick={() => handleClickRating("dispatchtime", 5)}
          >
            <RatingStar
              title="5"
              className="w-7"
              color={review?.dispatchtime >= 5 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q5"
            type="radio"
            value={5}
            name="dispatchtime"
            className="hidden"
          />
        </div>

        <h2 className="text-slate-200">Calidad del producto</h2>
        <div className="mb-4 flex">
          <label
            htmlFor="q1"
            onClick={() => handleClickRating("qualification", 1)}
          >
            <RatingStar
              title="1"
              className="w-7"
              color={review?.qualification >= 1 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q1"
            type="radio"
            value={1}
            name="qualification"
            className="hidden"
          />
          <label
            htmlFor="q2"
            onClick={() => handleClickRating("qualification", 2)}
          >
            <RatingStar
              title="2"
              className="w-7"
              color={review?.qualification >= 2 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q2"
            type="radio"
            value={2}
            name="qualification"
            className="hidden"
          />
          <label
            htmlFor="q3"
            onClick={() => handleClickRating("qualification", 3)}
          >
            <RatingStar
              title="3"
              className="w-7"
              color={review?.qualification >= 3 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q3"
            type="radio"
            value={3}
            name="qualification"
            className="hidden"
          />
          <label
            htmlFor="q4"
            onClick={() => handleClickRating("qualification", 4)}
          >
            <RatingStar
              title="4"
              className="w-7"
              color={review?.qualification >= 4 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q4"
            type="radio"
            value={4}
            name="qualification"
            className="hidden"
          />
          <label
            htmlFor="q5"
            onClick={() => handleClickRating("qualification", 5)}
          >
            <RatingStar
              title="5"
              className="w-7"
              color={review?.qualification >= 5 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q5"
            type="radio"
            value={5}
            name="qualification"
            className="hidden"
          />
        </div>

        <h2 className="text-slate-200">Atención al cliente</h2>
        <div className="mb-4 flex">
          <label htmlFor="q1" onClick={() => handleClickRating("support", 1)}>
            <RatingStar
              title="1"
              className="w-7"
              color={review?.support >= 1 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q1"
            type="radio"
            value={1}
            name="support"
            className="hidden"
          />
          <label htmlFor="q2" onClick={() => handleClickRating("support", 2)}>
            <RatingStar
              title="2"
              className="w-7"
              color={review?.support >= 2 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q2"
            type="radio"
            value={2}
            name="support"
            className="hidden"
          />
          <label htmlFor="q3" onClick={() => handleClickRating("support", 3)}>
            <RatingStar
              title="3"
              className="w-7"
              color={review?.support >= 3 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q3"
            type="radio"
            value={3}
            name="support"
            className="hidden"
          />
          <label htmlFor="q4" onClick={() => handleClickRating("support", 4)}>
            <RatingStar
              title="4"
              className="w-7"
              color={review?.support >= 4 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q4"
            type="radio"
            value={4}
            name="support"
            className="hidden"
          />
          <label htmlFor="q5" onClick={() => handleClickRating("support", 5)}>
            <RatingStar
              title="5"
              className="w-7"
              color={review?.support >= 5 ? "yellow" : "gray"}
            />
          </label>
          <input
            id="q5"
            type="radio"
            value={5}
            name="support"
            className="hidden"
          />
        </div>

        <textarea
          name="comment"
          cols={4}
          className="mt-4 w-4/5 resize-none p-1"
          onChange={handleChangeComment}
          placeholder="Comentario"
          value={review?.comment}
        />
        <button className="mt-4 w-4/5 rounded-md bg-ultraviolet p-1 text-white hover:scale-y-105 active:scale-100">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ReviewModal;
