//No sabemos si vamos a utilizar todo este codigo

import axios from "axios";
import { getUser, getStore } from "./usersSlice";

export const getUserApi = (id) => async (dispatch) => {
  const { data } = await axios.get(`user/detail/${id}`);
  return dispatch(getUser(data));
};

export const getStoreByUser = (id) => async (dispatch) => {
  const { data } = await axios.get(`user/store/${id}`);
  return dispatch(getStore(data));
};
