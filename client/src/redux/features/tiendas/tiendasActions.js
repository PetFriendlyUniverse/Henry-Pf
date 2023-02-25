import axios from "axios";
import { getProductsByStore } from "./tiendasSlice";

const getProductsByStoreAsync = (storeId) => async (dispatch) => {
  const { data } = await axios.get(`/products/store/${storeId}`);
  return dispatch(getProductsByStore(data));
};

export { getProductsByStoreAsync };
