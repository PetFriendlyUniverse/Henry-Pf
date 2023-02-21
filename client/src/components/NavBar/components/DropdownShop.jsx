import Subcard from "../../SubCard/Subcard";
import { useDispatch, useSelector } from "react-redux";
import LinkButton from "../../Button/LinkButton";
import { Link } from "react-router-dom";
import { clearShopCart } from "../../../redux/features/products/productsSlice";

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
    dispatch(clearShopCart());
  };

  return (
    <div className="group rounded-xl">
      <button className="  flex w-full items-center justify-between rounded-md border border-cyan-50 px-4 py-1 text-xs text-lightwhite md:text-sm lg:relative lg:text-base">
        $ {totalPrice}
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
        </svg>
      </button>

      <div className=" z-10 hidden max-h-96 w-96 rounded-b-lg bg-blue-100  group-hover:block lg:absolute">
        <div className=" flex w-full justify-between border border-black px-4 py-1 ">
          <p className="inline-block">{products.length} productos</p>
          <span
            onClick={handleDelete}
            className="rounded-md border border-red-500 px-1  text-red-500 hover:bg-red-500 hover:text-cyan-50"
          >
            Vaciar Carrito
          </span>
        </div>
        <div
          className={`flex h-80 flex-col gap-2 ${
            products.length > 3 && "overflow-scroll overflow-x-hidden"
          }  py-3`}
        >
          {products?.map((prod) => (
            <Subcard prod={prod} key={prod.id} />
          ))}
        </div>
        <hr />
        <div className="flex items-center justify-between rounded-b-lg bg-blue-200 p-2 ">
          <Link to="/shop/checkout">
            <LinkButton component={"Confirmar Compra"} />
          </Link>
          <h2 className="border-blue inline-block rounded-md border py-2 px-4">
            Total: ${totalPrice}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DropdownShop;
