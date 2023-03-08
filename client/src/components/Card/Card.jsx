import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  addNewProdShopCard,
  // setShopCart,
} from "../../redux/features/products/productsSlice";
import AddShopButton from "../Button/AddShopButton";
// import { Carousel } from "flowbite-react";
import CountProduct from "../CountProduct/CountProduct";
import { priceFormatter } from "../../adapters/priceFormatter";

function Card({ name, img, weight, price, stock, id }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const handleClickDeduct = () => {
    if (value > 0) setValue(value - 1);
  };
  const handleClickAdd = () => {
    if (value < stock) {
      setValue(value + 1);
    } else if (value == stock) {
      Swal.fire({
        icon: "warning",
        title: "Has alcanzado el limite de stock",
        showConfirmButton: false,
        timer: 650,
      });
    }
  };
  const handleAddShopCart = () => {
    if (value !== 0) {
      dispatch(
        addNewProdShopCard({
          id,
          name,
          img,
          weight,
          price,
          stock,
          amount: value,
        })
      );
      setValue(0);
      Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 800,
        closeOnEsc: true,
        closeOnClickOutside: true,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "No puede agregar cantidad 0 al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="flex h-full w-full min-w-fit max-w-xs flex-col items-center justify-between overflow-hidden rounded-lg border text-center  sm:max-w-sm ">
      <div className="h-56 w-full bg-[rgba(0,0,0,0.05)]">
        <Link
          to={`/shop/detail/${id}`}
          className="flex items-center justify-center "
        >
          <div className="h-56 w-56 ">
            {/* <Carousel slide={false} indicators={false}> */}
            <img src={img} alt="" className="h-56 w-56 " />
            {/* </Carousel> */}
          </div>
        </Link>
      </div>
      <div className="bg-[#fff] px-3 pb-2">
        <div className="flex  w-full items-center justify-center ">
          <h3 className="m-2 p-1 text-sm font-bold  xl:text-base">{name}</h3>
        </div>
        <div className=" flex w-full  items-center justify-center gap-2 ">
          <p className="my-1 rounded bg-ultraviolet py-2 px-4 text-xs font-semibold text-white">
            {weight} kg
          </p>
          <p className="rounded bg-ultraviolet py-2 px-4 text-xs font-semibold text-white">
            Stock: {stock}
          </p>
        </div>
        <div className="w-full ">
          <p className="p-1 text-center font-bold">{priceFormatter(price)}</p>
        </div>
        <div className="flex w-full items-center justify-around gap-1 p-1">
          <div className=" w-1/2">
            <CountProduct
              value={value}
              handleClickDeduct={handleClickDeduct}
              handleClickAdd={handleClickAdd}
              stock={stock}
              disabled={value === stock}
            />
          </div>
          <div className="w-1/2 ">
            <AddShopButton component={"Agregar"} onClick={handleAddShopCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
