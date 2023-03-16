import axios from "axios";
import { getProductsByStore, getStore } from "./tiendasSlice";

const getStoreAsync = (storeId) => async (dispatch) => {
  const { data } = await axios.get(`/store/${storeId}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return dispatch(getStore(data));
};

const getProductsByStoreAsync = (storeId) => async (dispatch) => {
  const { data } = await axios.get(`/products/store/${storeId}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return dispatch(getProductsByStore(data));
};

export { getProductsByStoreAsync, getStoreAsync };
