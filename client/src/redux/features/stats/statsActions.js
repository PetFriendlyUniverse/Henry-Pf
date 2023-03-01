import axios from "axios";
import {
  getUsers,
  getStores,
  getWalkers,
  getDaycares,
  getProducts,
} from "./statsSlice";

const getUsersStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dashboard/users`);
  return dispatch(getUsers(data));
};
const getStoresStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dashboard/stores`);
  return dispatch(getStores(data));
};
const getWalkersStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dashboard/walkers`);
  return dispatch(getWalkers(data));
};
const getDaycaresStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dashboard/daycares`);
  return dispatch(getDaycares(data));
};
const getProductsStats = () => async (dispatch) => {
  const { data } = await axios.get(`/dashboard/products`);
  return dispatch(getProducts(data));
};

export {
  getUsersStats,
  getStoresStats,
  getWalkersStats,
  getDaycaresStats,
  getProductsStats,
};
