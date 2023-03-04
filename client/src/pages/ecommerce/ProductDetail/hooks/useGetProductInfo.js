import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsId } from "../../../../redux/features/products/productsActions";
import { clearProductId } from "../../../../redux/features/products/productsSlice";

function useGetProductInfo(id) {
  const dispatch = useDispatch();
  const { productId } = useSelector((state) => state.Products);
  const { product, comments, qualification } = productId;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getProductsId(id));
    return () => {
      dispatch(clearProductId());
      setLoading(true);
    };
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [product]);

  return [product, comments, qualification, loading];
}

export default useGetProductInfo;
