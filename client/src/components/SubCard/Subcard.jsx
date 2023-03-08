import { useDispatch } from "react-redux";
import CountProduct from "../CountProduct/CountProduct";
import { setShopCart } from "../../redux/features/products/productsSlice";
import { priceFormatter } from "../../adapters/priceFormatter";

function Subcard({ prod, gridProperties }) {
  const { id, name, price, amount, img, stock, weight } = prod;
  const dispatch = useDispatch();

  const handleClickDeduct = () => {
    if (amount === 1) {
      dispatch(setShopCart({ id, data: "delete" }));
    } else {
      dispatch(setShopCart({ id, data: { amount: amount - 1 } }));
    }
  };
  const handleClickAdd = () => {
    if (amount < stock) {
      dispatch(setShopCart({ id, data: { amount: amount + 1 } }));
    } else {
      // notificar que no hay mas stock disponible
      // [ sweet alert ]
    }
  };
  return (
    <article className=" mx-auto flex w-11/12 flex-col items-center  justify-between gap-2 rounded-l-lg border-[1px] border-black px-2 sm:flex-row">
      <picture className="h-52 p-1  sm:h-auto sm:w-1/3">
        <img className="h-full" src={img} alt={name} />
      </picture>
      <div>
        <h2>{name}</h2>
        <p>{weight}kg</p>
        <span className="text-xs text-zinc-500">stock: {stock - amount}</span>
      </div>
      <div>
        <p>Precio: {priceFormatter(price * amount)}</p>
      </div>
      <div className="w-24 ">
        <CountProduct
          handleClickDeduct={handleClickDeduct}
          handleClickAdd={handleClickAdd}
          value={amount}
        />
      </div>
    </article>
  );
}

export default Subcard;
