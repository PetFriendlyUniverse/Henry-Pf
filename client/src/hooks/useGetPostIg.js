import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllInstagramUrlByApi } from "../redux/features/adopcion/adopcionActions";

// totalPagesIg: 1,
// currentPageIg: 1,
// postPerPageIg: 4,
// instagramUrls

function useGetPostIg() {
  const [loading, setLoading] = useState(true);
  const { instagramUrls, postPerPageIg, currentPageIg } = useSelector(
    (state) => state.Adopciones
  );
  console.log(instagramUrls);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getAllInstagramUrlByApi(currentPageIg, postPerPageIg));
  }, [currentPageIg, postPerPageIg]);

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [instagramUrls]);

  return [loading, instagramUrls];
}

export default useGetPostIg;
