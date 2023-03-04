import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDaycareApi } from "../redux/features/services/servicesActions";

function useGetDayCare() {
  const [loading, setLoading] = useState(true);
  const { products, productsPerPage, currentPage, setFilters } = useSelector(
    (state) => state.Products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getDaycareApi(productsPerPage, currentPage, setFilters));
  }, [setFilters, productsPerPage, currentPage]);

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [products]);

  return [loading, products];
}

export default useGetDayCare;
