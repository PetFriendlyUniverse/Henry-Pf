import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductsById } from "../../redux/features/products/productsSlice";
import { deleteProductId } from "../../redux/features/products/productsActions";
import { priceFormatter } from "../../adapters/priceFormatter";

function CardStoreId({ name, img, weight, price, stock, id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5380a4",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductId(id));
        Swal.fire({
          title: "Eliminado",
          text: "El producto ha sido eliminado correctamente",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    dispatch(getProductsById(id));
  }, []);

  return (
    <div className="flex h-64 w-52 flex-col items-center  justify-center border-2   border-gray-100 bg-[#fff] px-3 pb-2">
      <div className="relative   w-36 ">
        <div className="flex-end absolute  -right-10 top-0 flex aspect-square h-10 ">
          <Link to={`/shop/detail/modify/${id}`}>
            <button
              component={"Modify"}
              className="h-6 w-6 overflow-hidden  rounded-full bg-ultraviolet  text-xs font-semibold text-white"
            >
              /
            </button>
          </Link>
          <Link>
            <button
              onClick={handleClick}
              className="h-6 w-6 overflow-hidden  rounded-full bg-ultraviolet  text-xs font-semibold text-white"
            >
              x
            </button>
          </Link>
        </div>
        <Link to={`/shop/detail/${id}`}>
          <img src={img} alt="" className="aspect-square w-full " />
        </Link>
      </div>

      <div className="w-1/2">
        <p className=" text-center font-bold">{priceFormatter(price)}</p>
        <p className=" text-center text-xs font-bold">{name}</p>
      </div>
      <div className=" flex w-full  items-center justify-center  gap-2 ">
        <p className="my-1 rounded bg-ultraviolet py-2 px-4 text-xs font-semibold text-white">
          {weight}-kg
        </p>
        <p className="w-1/2 rounded bg-ultraviolet py-2 px-4 text-xs font-semibold text-white">
          Stock:{stock}
        </p>
      </div>
    </div>
  );
}

export default CardStoreId;
