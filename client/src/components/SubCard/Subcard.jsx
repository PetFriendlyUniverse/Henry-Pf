import { useDispatch } from "react-redux";
import CountProduct from "../CountProduct/CountProduct";
import { setShopCart } from "../../redux/features/products/productsSlice";
import { priceFormatter } from "../../adapters/priceFormatter";
import Swal from "sweetalert2";

function Subcard({ prod, gridProperties }) {
  const { id, name, price, amount, img, stock, weight } = prod;
  const dispatch = useDispatch();

  const handleClickDeduct = () => {
    if (amount === 1) {
      dispatch(setShopCart({ id, data: "delete" }));
    } else {
      dispatch(setShopCart({ id, data: "decrement" }));
    }
  };
  const handleClickAdd = () => {
    if (amount < stock) {
      dispatch(setShopCart({ id, data: "increment" }));
    } else {
      Swal.fire({
        icon: "warning",
        title: "Has alcanzado el limite de stock",
        showConfirmButton: false,
        timer: 650,
      });
    }
  };
  return (
    <article className=" mx-auto flex h-36 w-11/12  items-center  justify-between gap-2 rounded-l-lg border-[1px] border-black px-2 ">
      <picture className=" w-56 p-1  sm:h-auto sm:w-1/3">
        <img className="h-full" src={img} alt={name} />
      </picture>
      <div className="flex flex-col ">
        <div>
          <h2 className="font-bold">{name}</h2>
        </div>
        <div className="flex flex-col">
          <p>{weight}kg</p>
          <span className="text-xs text-zinc-500">Stock: {stock - amount}</span>
          <p className="self-end">{priceFormatter(price * amount)}</p>
        </div>
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
