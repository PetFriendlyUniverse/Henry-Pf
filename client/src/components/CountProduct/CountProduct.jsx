import LessButton from "../Button/LessButton";
import MoarButton from "../Button/MoarButton";
import s from "./CountProduct.module.css";
function CountProduct({ handleClickDeduct, handleClickAdd, value }) {
  return (
    <div className="flex w-full">
      <div className="w-1/3">
        <LessButton component={"-"} onClick={handleClickDeduct} />
      </div>
      <div className="w-1/3 bg-orange-900">
        <input
          type="number"
          className={`h-full w-full text-center ${s.input} shadow-inner shadow-gray-500`}
          value={value}
          readOnly
        />
      </div>
      <div className="w-1/3">
        <MoarButton component={"+"} value={+1} onClick={handleClickAdd} />
      </div>
    </div>
  );
}

export default CountProduct;
