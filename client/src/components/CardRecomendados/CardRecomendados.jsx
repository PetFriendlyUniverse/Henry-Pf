import { useDispatch, useSelector } from "react-redux";
import AddShopButton from "../Button/AddShopButton";
import ribbon from "../../assets/imagenes/ribbon.png";
import { addNewProdShopCard } from "../../redux/features/products/productsSlice";
import { priceFormatter } from "../../adapters/priceFormatter";
import Swal from "sweetalert2";

function CardRecomendados({ name, img, weight, price, stock, id }) {
  const dispatch = useDispatch();
  const thisProduct = useSelector((state) => state.Products?.shopCart[id]);

  const handleAddShopCart = () => {
    if ((thisProduct?.amount || 0) < (thisProduct?.stock || stock)) {
      dispatch(
        addNewProdShopCard({
          name,
          img,
          weight,
          price,
          stock,
          id,
          amount: 1,
        })
      );
      Swal.fire({
        icon: "success",
        title: "Producto añadido!",
        showConfirmButton: true,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "No hay stock",
        showConfirmButton: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
        timer: 1500,
      });
    }
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
