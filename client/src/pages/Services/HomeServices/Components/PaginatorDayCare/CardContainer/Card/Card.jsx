import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { priceFormatter } from "../../../../../../../adapters/priceFormatter";

// import { Carousel } from "flowbite-react";

function Card({ name, img, price_day, id, price_hour }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div className="flex  w-56 flex-col items-center justify-between overflow-hidden  rounded-lg border text-center ">
      <div className=" w-full bg-[rgba(0,0,0,0.05)]">
        <Link
          to={`/services/detail/${id}`}
          className="flex items-center justify-center "
        >
          <div className="h-56 w-56 ">
            {/* <Carousel slide={false} indicators={false}> */}
            <img src={img} alt="" className="h-56 w-56 " />
            {/* </Carousel> */}
          </div>
        </Link>
      </div>
      <div className="min-h-[150px] bg-[#fff] px-3 pb-2">
        <div className="flex  min-h-[90px] w-full items-center justify-center ">
          <h3 className="m-2 p-1 text-sm font-bold  xl:text-base">{name}</h3>
        </div>
        <div className=" flex w-full  items-center justify-center gap-2 ">
          <p className="my-1 rounded bg-ultraviolet py-2 px-4 text-xs font-semibold text-white">
            Precio por dia: {priceFormatter(price_day)}
          </p>
        </div>
        <div className=" flex w-full  items-center justify-center gap-2 ">
          <p className="my-1 rounded bg-ultraviolet py-2 px-4 text-xs font-semibold text-white">
            Precio por hora: {priceFormatter(price_hour)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
