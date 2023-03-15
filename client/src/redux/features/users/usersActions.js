//No sabemos si vamos a utilizar todo este codigo

import axios from "axios";
import {
  getUser,
  getStore,
  getDaycare,
  getWalker,
  getUserInvoices,
} from "./usersSlice";

export const getUserApi = () => async (dispatch) => {
  const { data } = await axios.get(`user/detail`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return dispatch(getUser(data));
};

export const getStoreByUser = () => async (dispatch) => {
  const { data } = await axios.get(`user/store`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return dispatch(getStore(data));
};

export const getDaycareByUser = () => async (dispatch) => {
  const { data } = await axios.get(`user/daycare/`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return dispatch(getDaycare(data));
};

export const getWalkerByUser = () => async (dispatch) => {
  const { data } = await axios.get(`user/walker`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return dispatch(getWalker(data));
};

export const getInvoicesById = (id) => async (dispatch) => {
  const { data } = await axios.get(`invoices/user/${id}`);
  return dispatch(getUserInvoices(data));
};
