import { useState } from "react";

function PriceRange({ title, min, max, onSet, mobile = true }) {
  //hacer toggle
  const [minVal, setMinVal] = useState(parseInt(min));
  const [maxVal, setMaxVal] = useState(parseInt(max));
  const [show, setShow] = useState(mobile);
  const toggleShow = () => {};
  const handleMinValue = ({ target }) => {
    if (parseInt(target.value) < parseInt(maxVal))
      setMinVal(parseInt(target.value));
  };
  const handleMaxValue = ({ target }) => {
    if (parseInt(target.value) >= parseInt(minVal))
      setMaxVal(parseInt(target.value));
  };
  const handleSetFilter = () => {
    onSet(minVal, maxVal);
  };

  return (
    <div>
      <div className="flex flex-col">
        <hr className="my-2 h-px border-0 bg-gray-400" />
        <button
          className={`bg-green-50  text-lg font-bold uppercase tracking-wider text-black  ${
            mobile ? "hover:text-yellow-600" : "cursor-default"
          }`}
          type="button"
          id="filters-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="filters-dropdown"
          data-dropdown-placement="bottom"
          onClick={toggleShow}
        >
          {title}
        </button>

        <ul
          ref={toggleShow}
          className={`hidden ${
            !show ? "md:h-[90px] lg:h-28" : "h-fit"
          } overflow-hidden md:block `}
        >
          <li className={`text- my-1 h-4 w-full cursor-pointer font-semibold`}>
            <label htmlFor="minRange">Mínimo: </label>
            <input
              type="range"
              min={min}
              max={max}
              step={10}
              onChange={handleMinValue}
              value={minVal}
              className=""
            />
          </li>
          <li className={`text- my-1 h-4 w-full cursor-pointer font-semibold`}>
            <label htmlFor="maxRange">Máximo: </label>
            <input
              id="maxRange"
              type="range"
              min={min}
              max={max}
              step={10}
              onChange={handleMaxValue}
              value={maxVal}
              className=""
            />
          </li>
          <span>
            rango:${minVal}-${maxVal}
          </span>
          <button onClick={handleSetFilter}>{".     Aplicar"}</button>
        </ul>
      </div>
    </div>
  );
}

export default PriceRange;
