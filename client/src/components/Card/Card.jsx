import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { setShopCart } from "../../redux/features/products/productsSlice";
import AddShopButton from "../Button/AddShopButton";
import CountProduct from "../CountProduct/CountProduct";
function Card({ name, img, weight, price, stock, id }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const handleClickDeduct = () => {
    if (value > 1) setValue(value - 1);
  };
  const handleClickAdd = () => {
    if (value < stock) setValue(value + 1);
  };
  const handleAddShopCart = () => {
    dispatch(
      setShopCart({
        id: id,
        data: { name, img, weight, price, stock, id, amount: value },
      })
    );
    setValue(1);
    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 800,
    });
  };
  return (
    <div className="flex  h-full w-full min-w-fit max-w-xs flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-black sm:max-w-sm ">
      <div className="h-56 w-full bg-[rgba(0,0,0,0.5)]">
        <Link
          to={`/shop/detail/${id}`}
          className="flex items-center justify-center"
        >
          <img src={img} alt="" className="h-56 w-56 " />
        </Link>
      </div>
      <div className="flex   justify-between">
        <h3 className="text-bold m-2 self-start p-1">{name}</h3>
      </div>
      <div className="mt-2 flex  items-center justify-center gap-2">
        <p className="text-bold my-1 rounded bg-cyan-400 py-1 px-2 text-xs text-white">
          {weight} kg
        </p>
        <p className="text-bold rounded bg-cyan-400 py-1 px-2 text-xs text-white">
          Stock: {stock}
        </p>
      </div>
      <div className="h-">
        <p className="text-bold p-1">${price}</p>
      </div>
      <div className="flex items-center justify-around gap-1 bg-slate-100 p-1">
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
          <AddShopButton component={"Comprar"} onClick={handleAddShopCart} />
        </div>
      </div>
    </div>
  );
}

export default Card;
