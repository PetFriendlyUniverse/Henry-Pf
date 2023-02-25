import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../../../redux/features/products/productsSlice";

function usePriceRangeControll() {
  const { min, max } = useSelector((state) => state.Products?.priceRange);
  // const rangeSeted = useSelector(
  //   (state) => state.Products?.setFilters?.priceRange
  // );
  const dispatch = useDispatch();
  const onSet = (minVal, maxVal) => {
    dispatch(setFilters({ filter: "priceRange", value: [minVal, maxVal] }));
  };
  return { min, max, onSet };
}

export default usePriceRangeControll;
