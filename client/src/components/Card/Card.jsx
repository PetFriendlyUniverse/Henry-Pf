function Card({ name, img, weight, price }) {
  return (
    <div className="flex flex-wrap">
      <p>{name}</p>
      <p>{img}</p>
      <p>{weight}</p>
      <p>{price}</p>
    </div>
  );
}

export default Card;
