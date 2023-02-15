function Card({ name, img, weight, price }) {
  return (
    <div className="flex h-72 w-52 flex-col items-center justify-center border-2 border-black">
      <h3>{name}</h3>
      <img src={img} alt="" className="h-full" />
      <p>{weight}</p>
      <div className=" flex gap-1">
        <div className="w-1/2">
          <p>contador</p>
        </div>
        <div className="w-1/2">
          <button>comprar</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
