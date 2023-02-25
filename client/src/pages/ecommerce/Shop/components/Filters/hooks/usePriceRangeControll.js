import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../../../redux/features/products/productsSlice";

function usePriceRangeControll() {
  const { min, max } = useSelector((state) => state.Products?.priceRange);
  // const rangeSeted = useSelector(
  //   (state) => state.Products?.setFilters?.priceRange
  // );
  const dispatch = useDispatch();
  const onSet = (arr2) => {
    dispatch(setFilters({ filter: "priceRange", value: arr2 || "" })); // setea el arr2 con min,max o "" para eliminar filtro
  };
  return { min, max, onSet };
}

export default usePriceRangeControll;
