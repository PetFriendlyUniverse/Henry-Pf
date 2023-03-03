//No sabemos si vamos a utilizar todo este codigo

import axios from "axios";
import {
  getUser,
  getStore,
  getDaycare,
  getWalker,
  getUserInvoices,
} from "./usersSlice";

export const getUserApi = (id) => async (dispatch) => {
  const { data } = await axios.get(`user/detail/${id}`);
  return dispatch(getUser(data));
};

export const getStoreByUser = (id) => async (dispatch) => {
  const { data } = await axios.get(`user/store/${id}`);
  return dispatch(getStore(data));
};

export const getDaycareByUser = (id) => async (dispatch) => {
  const { data } = await axios.get(`user/daycare/${id}`);
  return dispatch(getDaycare(data));
};

export const getWalkerByUser = (id) => async (dispatch) => {
  const { data } = await axios.get(`user/walker/${id}`);
  return dispatch(getWalker(data));
};

export const getInvoicesById = (id) => async (dispatch) => {
  const { data } = await axios.get(`invoices/user/${id}`);
  return dispatch(getUserInvoices(data));
};
