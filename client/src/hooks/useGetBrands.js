import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBrandsApi } from "../redux/features/products/productsActions";

function useGetBrands() {
  const brands = useSelector((state) => state.Products?.allBrands);
  const dispatch = useDispatch();
  useEffect(() => {
    !brands && dispatch(getAllBrandsApi());
  }, []);

  return filters;
}

export default useGetBrands;
