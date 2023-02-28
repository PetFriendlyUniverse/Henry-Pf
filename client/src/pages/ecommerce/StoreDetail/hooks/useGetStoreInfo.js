import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoreAsync } from "../../../../redux/features/tiendas/tiendasActions";

export const useGetStoreInfo = (storeId) => {
  const [loading, setLoading] = useState(true);
  const storeInfo = useSelector((state) => state.Tiendas?.storeData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (storeId !== storeInfo.id) {
      dispatch(getStoreAsync(storeId));
    } else {
      setLoading(false);
    }
    storeId === storeInfo.storeId && setLoading(false);
  }, [storeInfo]);
  // const
  return [loading, storeInfo];
};
