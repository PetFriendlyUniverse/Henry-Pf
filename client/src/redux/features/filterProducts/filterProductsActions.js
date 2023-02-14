import axios from "axios";
import { getProducts } from "./filterProductsSlice";

export const getProductsApi = () => async (dispatch) => {
  console.log("data.resuts en Slice");
  const { data } = await axios.get("/products");
  console.log(data);

  return dispatch(getProducts(data));
};
