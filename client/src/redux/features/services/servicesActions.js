import {
  getAllWalkers,
  getWalkerByID,
  getAllDaycares,
  getDaycareByID,
} from "./servicesSlice";
import axios from "axios";

const getAllWalkersApi = (page, pq) => async (dispatch) => {
  const { data } = await axios.get(`/walker?page=${page}&pq=${pq}`);
  return dispatch(getAllWalkers(data));
};
const getWalkerByIdApi = (id) => async (dispatch) => {
  const { data } = await axios.get(`/walker/detail/${id}`);
  return dispatch(getWalkerByID(data));
};
const getAllDaycaresApi = (page, pq) => async (dispatch) => {
  const { data } = await axios.get(`/daycare?page=${page}&pq=${pq}`);
  return dispatch(getAllDaycares(data));
};
const getDaycareApi = (id) => async (dispatch) => {
  const { data } = await axios.get(`/daycare/detail/${id}`);
  return dispatch(getDaycareByID(data));
};
export { getAllWalkersApi, getWalkerByIdApi, getAllDaycaresApi, getDaycareApi };
