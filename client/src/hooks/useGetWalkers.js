import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllWalkersApi } from "../redux/features/services/servicesActions";

function useGetWalkers() {
  const [loading, setLoading] = useState(true);
  const { walkers, walkersPerPage, currentPageWalker } = useSelector(
    (state) => state.Services
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getAllWalkersApi(currentPageWalker, walkersPerPage));
  }, [currentPageWalker, walkersPerPage]);

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [walkers]);

  return [loading, walkers];
}

export default useGetWalkers;
