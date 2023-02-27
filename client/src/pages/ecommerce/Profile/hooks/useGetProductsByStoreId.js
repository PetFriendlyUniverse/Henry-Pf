import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByStoreAsync } from "../../../../redux/features/tiendas/tiendasActions";
function useGetProductsByStoreId(id) {
  const dispatch = useDispatch(id);
  const products = useSelector((state) => state.Tiendas?.products);
  useEffect(() => {
    dispatch(getProductsByStoreAsync(id));
  }, []);

  return products;
}

export default useGetProductsByStoreId;
