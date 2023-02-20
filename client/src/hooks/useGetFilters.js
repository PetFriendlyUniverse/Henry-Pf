import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFiltersApi } from "../redux/features/products/productsActions";

function useGetFilters() {
  const filters = useSelector((state) => state.Products?.allFilters);
  const dispatch = useDispatch();
  useEffect(() => {
    !Object.keys(filters).length && dispatch(getFiltersApi());
  }, []);

  return filters;
}

export default useGetFilters;
