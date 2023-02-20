import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFiltersApi } from "../redux/features/products/productsActions";

function useGetFilters() {
  const brands = useSelector((state) => state.Products?.allBrands);
  const dispatch = useDispatch();
  useEffect(() => {
    !brands && dispatch(getFiltersApi());
  }, []);

  return filters;
}

export default useGetFilters;
