import {
  getAllWalkers,
  getWalkerByID,
  getAllDaycares,
  getDaycareByID,
} from "./servicesSlice";
import axios from "axios";

const getAllWalkersApi = () => async (dispatch) => {
  const { data } = await axios.get("/walker/");
  return dispatch(getAllWalkers(data));
};
const getWalkerApi = (id) => async (dispatch) => {
  const { data } = await axios.get(`/walker/detail/${id}`);
  return dispatch(getWalkerByID(data));
};
const getAllDaycaresApi = () => async (dispatch) => {
  const { data } = await axios.get("/daycare/");
  return dispatch(getAllDaycares(data));
};
const getDaycareApi = (id) => async (dispatch) => {
  const { data } = await axios.get(`/daycare/detail/${id}`);
  return dispatch(getDaycareByID(data));
};
export { getAllWalkersApi, getWalkerApi, getAllDaycaresApi, getDaycareApi };
