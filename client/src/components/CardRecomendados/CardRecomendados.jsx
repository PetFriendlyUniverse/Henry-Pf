import { useDispatch } from "react-redux";
import AddShopButton from "../Button/AddShopButton";
import ribbon from "../../assets/imagenes/ribbon.png";
import { setShopCart } from "../../redux/features/products/productsSlice";
import { useState } from "react";
import { priceFormatter } from "../../adapters/priceFormatter";
function CardRecomendados({ name, img, weight, price, stock, id }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  const handleAddShopCart = () => {
    dispatch(
      setShopCart({
        id: id,
        data: { name, img, weight, price, stock, id, amount: value },
      })
    );
    setValue(1);
  };

  return (
    <div className="h-46 flex flex-col border-2  border-gray-50 bg-[#fff] px-3 pb-2">
      <div className="relative">
        <img className="absolute h-10" src={ribbon} alt="" />
      </div>
      <div className="aspect-square w-24 overflow-hidden">
        <img src={img} alt="" className="aspect-square w-24 " />
      </div>
      <div className="w-full ">
        <p className="p-1 text-center font-bold">{priceFormatter(price)}</p>
      </div>
      <div className="w-full ">
        <AddShopButton component={"Comprar"} onClick={handleAddShopCart} />
      </div>
    </div>
  );
}

export default CardRecomendados;
