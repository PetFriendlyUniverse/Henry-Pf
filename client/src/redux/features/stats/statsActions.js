import axios from "axios";
import {
  getUsers,
  getStores,
  getWalkers,
  getDaycares,
  getProducts,
} from "./statsSlice";

const getUsersStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dates/users`);
  return dispatch(getUsers(data));
};
const getStoresStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dates/stores`);
  return dispatch(getStores(data));
};
const getWalkersStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dates/walkers`);
  return dispatch(getWalkers(data));
};
const getDaycaresStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dates/daycares`);
  return dispatch(getDaycares(data));
};
const getProductsStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dates/products`);
  return dispatch(getProducts(data));
};

export {
  getUsersStats,
  getStoresStats,
  getWalkersStats,
  getDaycaresStats,
  getProductsStats,
};
