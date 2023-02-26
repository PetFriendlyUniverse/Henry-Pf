import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByStoreAsync } from "../../../../redux/features/tiendas/tiendasActions";
function useGetProductsByStoreId() {
  const dispatch = useDispatch();
  const storeId = 1; // despues esto va a extraerse dinamicamente de redux
  const products = useSelector((state) => state.Tiendas?.products);
  useEffect(() => {
    dispatch(getProductsByStoreAsync(storeId));
  }, []);

  return products;
}

export default useGetProductsByStoreId;
