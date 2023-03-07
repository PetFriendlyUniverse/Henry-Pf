import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAdopcionesApi } from "../redux/features/adopcion/adopcionActions";

function useGetAdopciones() {
  const [loading, setLoading] = useState(true);
  const { adopcion, adopcionPerPage, currentPage, province } = useSelector(
    (state) => state.Adopciones
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getAdopcionesApi(currentPage, adopcionPerPage, province));
  }, [currentPage, adopcionPerPage, province]);

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [adopcion]);

  return [loading, adopcion];
}

export default useGetAdopciones;
