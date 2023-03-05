import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllDaycaresApi,
  getDaycareApi,
} from "../redux/features/services/servicesActions";

function useGetDayCare() {
  const [loading, setLoading] = useState(true);
  const { daycares, daycaresPerPage, currentPageDaycare } = useSelector(
    (state) => state.Services
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getAllDaycaresApi(currentPageDaycare, daycaresPerPage));
  }, [currentPageDaycare, daycaresPerPage]);

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [daycares]);

  return [loading, daycares];
}

export default useGetDayCare;
