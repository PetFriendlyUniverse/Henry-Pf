import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDaycareApi } from "../redux/features/services/servicesActions";

function useGetDayCare() {
  const [loading, setLoading] = useState(true);
  const { dayCares, dayCaresPerPage, currentPage } = useSelector(
    (state) => state.Services
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getDaycareApi(dayCaresPerPage, currentPage));
  }, [dayCaresPerPage, currentPage]);

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [dayCares]);

  return [loading, dayCares];
}

export default useGetDayCare;
