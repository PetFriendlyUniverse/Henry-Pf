import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFiltersApi } from "../redux/features/products/productsActions";

function useGetFilters() {
  const filters = useSelector((state) => state.Products?.allFilters);
  const dispatch = useDispatch();
  useEffect(() => {
    !filters && dispatch(getFiltersApi());
  }, []);

  return filters;
}

export default useGetFilters;
