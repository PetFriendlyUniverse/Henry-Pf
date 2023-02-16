import { useState } from "react";
import { useDispatch } from "react-redux";
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
    if (value < 10) setValue(value + 1);
  };
  const handleAddShopCart = () => {
    dispatch(
      setShopCart({
        id: id,
        data: { name, img, weight, price, stock, id, amount: value },
      })
    );
    setValue(1);

    // setear una alerta con sweetalert "producto agregado al carrito"
  };
  return (
    <div className="mx-1 my-4 flex h-96 w-52 flex-col items-center justify-center rounded-lg border ">
      <div className="h-2/3 ">
        <img src={img} alt="" className="h-full w-full rounded-lg " />
      </div>
      <h3 className="text-bold m-2 self-start p-1">{name}</h3>
      <p className="text-bold rounded bg-cyan-400 py-1 px-2 text-xs text-white">
        {weight} kg
      </p>
      <p className="text-bold p-1">${price}</p>
      <div className="flex h-11 items-center justify-around gap-1 bg-slate-100 p-1">
        <div className=" w-1/2">
          <CountProduct
            value={value}
            handleClickDeduct={handleClickDeduct}
            handleClickAdd={handleClickAdd}
            stock={stock}
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
