import CountProduct from "../CountProduct/CountProduct";
function Card({ name, img, weight, price }) {
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
          <CountProduct />
        </div>
        <div className="w-1/2 ">
          <button className=" h-full w-full rounded-lg bg-green-500 px-2 py-1 font-bold  text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-emerald-900">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
