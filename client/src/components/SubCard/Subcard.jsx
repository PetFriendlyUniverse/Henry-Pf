import { useDispatch } from "react-redux";
import CountProduct from "../CountProduct/CountProduct";
import { setShopCart } from "../../redux/features/products/productsSlice";

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
    <article className="flex w-full items-center justify-between">
      <picture className="w-20 p-1">
        <img src={img} alt={name} />
      </picture>
      <div>
        <h2>{name}</h2>
        <p>{weight}kg</p>
        <span className="text-xs text-zinc-500">stock: {stock - amount}</span>
      </div>
      <div>
        <CountProduct
          handleClickDeduct={handleClickDeduct}
          handleClickAdd={handleClickAdd}
          value={amount}
        />
      </div>
      <div>
        <p>precio: ${price * amount},00</p>
      </div>
    </article>
  );
}

export default Subcard;
