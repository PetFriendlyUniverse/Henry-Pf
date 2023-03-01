import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoreAsync } from "../../../../redux/features/tiendas/tiendasActions";
import { useParams } from "react-router-dom";

export const useGetStoreInfo = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(true);
  const storeInfo = useSelector((state) => state.Tiendas?.storeData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (parseInt(id) === parseInt(storeInfo?.id)) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
      dispatch(getStoreAsync(id));
    }
  }, [storeInfo]);
  return [isLoaded, storeInfo];
};
