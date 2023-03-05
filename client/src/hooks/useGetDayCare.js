import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllDaycaresApi } from "../redux/features/services/servicesActions";

function useGetDayCare() {
  const [loading, setLoading] = useState(true);
  const { daycares, daycaresPerPage, currentPageDaycare, province } =
    useSelector((state) => state.Services);
  console.log(province);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getAllDaycaresApi(currentPageDaycare, daycaresPerPage, province));
  }, [currentPageDaycare, daycaresPerPage, province]);

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [daycares]);

  return [loading, daycares];
}

export default useGetDayCare;
