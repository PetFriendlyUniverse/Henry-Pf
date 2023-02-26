import { Link } from "react-router-dom";
function CardStoreId({ name, img, weight, price, stock, id }) {
  return (
    <div className="flex w-52  flex-col items-center  justify-center border-2   border-gray-100 bg-[#fff] px-3 pb-2">
      <div className="relative   w-36 ">
        <div className="flex-end absolute  -right-10 top-0 flex aspect-square h-10 ">
          <button className="h-6 w-6 overflow-hidden  rounded-full bg-ultraviolet  text-xs font-semibold text-white">
            /
          </button>
          <button className="h-6 w-6 overflow-hidden  rounded-full bg-ultraviolet  text-xs font-semibold text-white">
            x
          </button>
        </div>
        <Link to={`/shop/detail/${id}`}>
          <img src={img} alt="" className="aspect-square w-full " />
        </Link>
      </div>

      <div className="w-1/2">
        <p className=" text-center font-bold">${price}</p>
        <p className=" text-center text-xs font-bold">{name}</p>
      </div>
      <div className=" flex w-full  items-center justify-center  gap-2 ">
        <p className="my-1 rounded bg-ultraviolet py-2 px-4 text-xs font-semibold text-white">
          {weight}-kg
        </p>
        <p className="w-1/2 rounded bg-ultraviolet py-2 px-4 text-xs font-semibold text-white">
          Stock:{stock}
        </p>
      </div>
    </div>
  );
}

export default CardStoreId;
