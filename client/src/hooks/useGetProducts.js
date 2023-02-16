import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsApi } from "../redux/features/products/productsActions";

function useGetProducts() {
  const { products, productsPerPage, currentPage, setFilters } = useSelector(
    (state) => state.Products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsApi(productsPerPage, currentPage, setFilters));
  }, [setFilters]);
  return products;
}

export default useGetProducts;
