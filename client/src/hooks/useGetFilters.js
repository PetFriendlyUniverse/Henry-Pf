import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFiltersApi } from "../redux/features/products/productsActions";

function useGetFilters() {
  const filters = useSelector((state) => state.Products.allFilters);
  const dispatch = useDispatch();
  console.log(filters);
  useEffect(() => {
    dispatch(getFiltersApi());
  }, []);

  const keys = filters.map((obj) => Object.keys(obj)); // ["key","key2"]
  const values = Object.values(filters); // [{},{},..]
  // const filterLists = [["Breeds", []]];
  // const filterLists = keys.map((key) => key);
  // let i = 0;
  // filters.forEach((filter) => {
  //   filter.push(values[i]);
  //   i++;
  // });
  console.log(filters);

  // return filterLists;
}

export default useGetFilters;
