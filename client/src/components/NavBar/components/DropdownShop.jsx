import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Subcard from "../../SubCard/Subcard";
import LinkButton from "../../Button/LinkButton";
import { clearShopCart } from "../../../redux/features/products/productsSlice";
import deleteBtn from "../../../assets/general/delete.svg";
import shopcart from "../../../assets/general/shopcart.svg";
import { priceFormatter } from "../../../adapters/priceFormatter";
import { useRef } from "react";
import arrowDropdown from "../../../assets/arrows/arrowDropdown.svg";

function DropdownShop() {
  const dispatch = useDispatch();
  const shopCartProducts = useSelector((state) => state.Products?.shopCart);
  const productsIds = Object.keys(shopCartProducts);
  let totalPrice = 0;
  const products = productsIds.map((id) => {
    totalPrice += shopCartProducts[id].amount * shopCartProducts[id].price;
    return shopCartProducts[id];
  });

  const handleDelete = () => {
    totalPrice > 0 &&
      Swal.fire({
        icon: "warning",
        title: "Está seguro de que quiere eliminar su carro de compras?",
        showConfirmButton: true,
        confirmButtonText: "Si",
        showDenyButton: true,
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(dispatch(clearShopCart()));
          Swal.fire({
            title: "Productos Eliminados",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const img = useRef();
  const dropDown = useRef();
  const toggleDropdown = () => {
    img.current.classList.toggle("rotate-180");
    dropDown.current.classList.toggle("hidden");
  };
  const mouseOut = () => {
    img.current.classList.remove("rotate-180");
    dropDown.current.classList.add("hidden");
  };

  return (
    <div className="flex w-full flex-col items-center  md:relative md:mt-2 md:w-52">
      <button
        onClick={toggleDropdown}
        className=" flex w-1/2 items-center justify-around  rounded-xl border border-cornflowerblue py-2 md:w-full "
      >
        <img src={shopcart} alt="" />
        <span className="font-bold text-cornflowerblue">
          {priceFormatter(totalPrice)}
        </span>
        <img
          ref={img}
          src={arrowDropdown}
          alt=""
          className="transition-transform "
        />
      </button>
      {/* contenedor modalShop */}
      <div
        onMouseOut={mouseOut}
        ref={dropDown}
        className=" z-10 mt-2 hidden w-full rounded-b-lg bg-blue-100 hover:block md:absolute md:right-0 md:top-10 md:h-80  md:w-[500px] lg:h-96 2xl:left-0"
      >
        <div className=" flex w-full items-center justify-between border-b border-black px-4 py-1 ">
          {!!products.length && (
            <span
              className="flex w-full justify-between"
              onClick={handleDelete}
            >
              <p className="inline-block">{products.length} productos</p>
              <img
                src={deleteBtn}
                className="w-7 cursor-pointer hover:scale-105"
                alt="vaciar carrito"
              />
            </span>
          )}
        </div>
        <div
          className={`flex h-40 flex-col gap-2 ${
            products.length && "overflow-scroll overflow-x-hidden"
          }  py-3 md:h-56 lg:h-[340px] `}
        >
          {products.length ? (
            products?.map((prod) => <Subcard prod={prod} key={prod.id} />)
          ) : (
            <span className="flex h-full w-full items-center justify-center text-xl">
              <h2>No hay productos agregados al carrito</h2>
            </span>
          )}
        </div>
        <hr />
        {!!products.length && (
          <div className="flex items-center justify-between rounded-b-lg bg-blue-200 p-2 ">
            <Link to="/shop/checkout">
              <LinkButton component={"Confirmar Compra"} />
            </Link>
            <h2 className="border-blue inline-block rounded-md border py-2 px-4">
              Total: {priceFormatter(totalPrice)}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownShop;
