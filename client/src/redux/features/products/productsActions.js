import axios from "axios";
import { getProducts } from "./productsSlice";

export const getProductsApi = () => async (dispatch) => {
  console.log("getProducts");
  const { data } = await axios.get("/products?pq=3&page=1");
  console.log(data);

  return dispatch(getProducts(data));
};
