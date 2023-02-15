import LessButton from "../Button/LessButton";
import MoarButton from "../Button/MoarButton";
import s from "./CountProduct.module.css";
function CountProduct() {
  return (
    <div className="flex w-full">
      <div className="w-1/3">
        <LessButton component={"-"} />
      </div>
      <div className="w-1/3 bg-orange-900">
        <input
          type="number"
          name=""
          id=""
          className={`h-full w-full text-center ${s.input}`}
          value="1"
        />
      </div>
      <div className="w-1/3">
        <MoarButton component={"+"} />
      </div>
    </div>
  );
}

export default CountProduct;
