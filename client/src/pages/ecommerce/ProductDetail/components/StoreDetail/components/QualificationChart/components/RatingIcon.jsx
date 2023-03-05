import good from "./assets/good.svg";
import wrong from "./assets/wrong.svg";
const imgSwitch = (rating) => (rating >= 3 ? good : wrong);

function RatingIcon({ rating }) {
  return (
    <img
      src={imgSwitch(rating)}
      alt=""
      className="absolute -right-2 bottom-0 w-6"
    />
  );
}

export default RatingIcon;
