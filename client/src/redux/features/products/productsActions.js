import { getProducts, getFilters, setFilters } from "./productsSlice";
import axios from "axios";
import { queryMarker } from "./helpers/queryMaker";

const getProductsApi =
  (productsPerPage, currentPage, setFilters) => async (dispatch) => {
    const query = queryMarker(productsPerPage, currentPage, setFilters);
    const { data } = await axios.get(`/products${query}`);
    return dispatch(getProducts(data));
  };

const getFiltersApi = () => async (dispatch) => {
  const { data } = await axios.get("/products/filters");
  return dispatch(getFilters(data));
};

export { getProductsApi, getFiltersApi, setFilters };
