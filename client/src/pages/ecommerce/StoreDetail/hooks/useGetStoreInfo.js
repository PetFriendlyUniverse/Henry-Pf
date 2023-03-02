import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { getStoreAsync } from "../../../../redux/features/tiendas/tiendasActions";

export const useGetStoreInfo = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [storeInfo, setStoreInfo] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/store/${id}`)
      .then((res) => {
        setStoreInfo(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
      });
    return () => setIsLoaded(false);
  }, [id]);

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
