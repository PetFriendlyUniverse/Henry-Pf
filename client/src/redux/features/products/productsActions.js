import axios from "axios";
import { getProducts, getFilters, setFilters } from "./productsSlice";

const getProductsApi = () => async (dispatch) => {
  const { data } = await axios.get("/products?pq=12&page=1");
  return dispatch(getProducts(data));
};

const getFiltersApi = () => async (dispatch) => {
  const { data } = await axios.get("/products/filters");
  return dispatch(getFilters(data));
};

export { getProductsApi, getFiltersApi, setFilters };
