import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFiltersApi } from "../redux/features/products/productsActions";

function useGetFilters() {
  const [loading, setLoading] = useState(true);
  const filters = useSelector((state) => state.Products?.allFilters);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [filters]);
  useEffect(() => {
    if (!Object.keys(filters).length) {
      setLoading(true);
      dispatch(getFiltersApi());
    }
  }, []);

  return [loading, filters];
}

export default useGetFilters;
