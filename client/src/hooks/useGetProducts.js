import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsApi } from "../redux/features/products/productsActions";

function useGetProducts() {
  const [loading, setLoading] = useState(true);
  const { products, productsPerPage, currentPage, setFilters } = useSelector(
    (state) => state.Products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [products]);

  useEffect(() => {
    setLoading(true);
    dispatch(getProductsApi(productsPerPage, currentPage, setFilters));
  }, [setFilters, productsPerPage, currentPage]);

  return [loading, products, productsPerPage];
}

export default useGetProducts;
