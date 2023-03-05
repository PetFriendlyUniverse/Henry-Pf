import { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { getStoreAsync } from "../../../../redux/features/tiendas/tiendasActions";

export const useGetStoreInfo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [storeInfo, setStoreInfo] = useState({});
  const [error, setError] = useState(null);
  const { product } = useSelector((state) => state.Products?.productId);
  useEffect(() => {
    product?.StoreId &&
      axios
        .get(`/store/${product?.StoreId}`)
        .then((res) => {
          setStoreInfo(res.data);
          setIsLoaded(true);
        })
        .catch((err) => {
          setError(err);
        });
    return () => setIsLoaded(false);
  }, [product?.StoreId]);

  return [isLoaded, storeInfo?.store, storeInfo?.averages, error];

  // ----------------------   codigo viejo (con bucle infinito xd) -----------------------------------//
  // const { id } = useParams();
  // const [isLoaded, setIsLoaded] = useState(true);
  // const storeInfo = useSelector((state) => state.Tiendas?.storeData);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (parseInt(id) === parseInt(storeInfo?.id)) {
  //     setIsLoaded(true);
  //   } else {
  //     setIsLoaded(false);
  //     dispatch(getStoreAsync(id));
  //   }
  // }, [storeInfo]);
  // return [isLoaded, storeInfo];
  // ---------------------- fin codigo viejo (con bucle infinito xd) -----------------------------------//
};
